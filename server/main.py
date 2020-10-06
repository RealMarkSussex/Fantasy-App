from fpl import FPL
import aiohttp
import asyncio


async def getPlayer():
    session = aiohttp.ClientSession()
    fpl = FPL(session)

    await session.close()

    players = await fpl.get_players();
    print()
    for player in players:
        if player.first_name == "Patrick" and player.second_name == "Bamford":
            print(player)
     

asyncio.run(getPlayer())
