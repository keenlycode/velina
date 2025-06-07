import * as esbuild from 'esbuild';
import glob from 'fast-glob';
import path from 'node:path';


const __dir = new URL('.', import.meta.url).pathname;
const __dir_velina = path.join(__dir, 'velina');


function _import_version_plugin(version?: string) {
  if (!version) {
    version = new Date().toISOString();
  }
  return {
    name: 'import-versioning',
    setup(build: unknown) {
      // @ts-ignore: build is of type 'unknown'
      build.onResolve({ filter: /\.js$/ }, args => {
        if (args.kind === 'import-statement') {
          return {
            path: args.path + `?_v=${version}`,
            external: true
          };
        }
      });
    }
  }
}


const _esbuild_config = {
  platform: 'browser',
  format: 'esm',
  minify: true,
  bundle: true,
  keepNames: true,
  sourcemap: true,
  target: ['chrome124'],
  outbase: 'src',
  outdir: 'dist',
  entryNames: '[dir]/[name]',
  metafile: true,
  plugins: [_import_version_plugin()]
}


async function bundle() {
  const entries = await glob([`${__dir_velina}/**/*.bundle.{js,ts}`]);
  // @ts-ignore: _esbuild_config
  const result = await esbuild.build({
    entryPoints: entries,
    ..._esbuild_config
  });

  // @ts-ignore: Argument of type 'Metafile | undefined'
  console.log(await esbuild.analyzeMetafile(result.metafile))
}


async function build() {
  await bundle();
  const entries = await glob([
    `${__dir_velina}/**/*.{js,ts}`,
    `!${__dir_velina}/**/*.bundle.{js,ts}`
  ]);
  // @ts-ignore: _esbuild_config
  const result = await esbuild.build({
    entryPoints: entries,
    ..._esbuild_config,
  });

  // @ts-ignore: Argument of type 'Metafile | undefined'
  console.log(await esbuild.analyzeMetafile(result.metafile))
}

async function dev() {
  await bundle()
  const _glob = [
    `${__dir_velina}/**/*.{js,ts}`,
    `!${__dir_velina}/**/*.bundle.{js,ts}`
  ]
  const entries = await glob(_glob);
  // @ts-ignore: _esbuild_config
  const ctx = await esbuild.context({
    entryPoints: entries,
    ..._esbuild_config,
    metafile: false
  });

  await ctx.watch();
  console.log('watching...', _glob)
}


if (import.meta.main) {
  if (Deno.args[0] === "bundle") {
    bundle();
  } else if (Deno.args[0] === "build") {
    build();
  } else if (Deno.args[0] === "dev") {
    dev();
  }
}
