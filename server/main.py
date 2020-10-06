from fpl import FPL
import aiohttp
import asyncio


async def main():
    session = aiohttp.ClientSession()
    fpl = FPL(session)

    await session.close()

    player = await fpl.get_player(302);
    
    print(player)

asyncio.run(main())
