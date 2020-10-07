from fpl import FPL
import aiohttp
import asyncio


def position_converter(position):
    position_map = {
        1: "Goalkeeper",
        2: "Defender",
        3: "Midfielder",
        4: "Forward"
    }
    return position_map[position]


def player_is_better(player):
    return player.points_per_game


async def get_player(position, price):
    session = aiohttp.ClientSession()
    fpl = FPL(session)

    players = await fpl.get_players()
    matchingPlayers = []

    for player in players:
        if position_converter(player.element_type) == position and player.now_cost <= price:
            matchingPlayers.append(player)
    await session.close()
    
    return matchingPlayers

players = asyncio.run(get_player("Defender", 57))
players.sort(key=player_is_better, reverse=True)
print(dir(players[0]))
for player in players[:5]:
    print(player)
