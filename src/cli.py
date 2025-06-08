# lib: built-in
import asyncio

# lib: external
from cyclopts import App

app = App()

@app.command
async def dev():
    cmd_1 = [
        'engrave', 'server', 'src/dist/', 'dist/',
        r'--copy=.*\.(webp|jpg|png|svg|ttf|css)$',
        r'--watch=.*\.(js)$',
    ]
    cmd_2 = ['deno', 'run', '-A', 'src/esbuild.ts', 'dev']
    proc_1 = await asyncio.create_subprocess_exec(*cmd_1)
    proc_2 = await asyncio.create_subprocess_exec(*cmd_2)
    await asyncio.gather(
        proc_1.communicate(),
        proc_2.communicate(),
    )

app()
