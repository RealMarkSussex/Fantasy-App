from ..utils.playerutils import player_is_better, players_to_json, position_converter


async def get_top_five_players(position, price, fpl):
    players = await get_players(position, price, fpl)
    players.sort(key=player_is_better, reverse=True)
    json_players = players_to_json(players)
    return json_players


async def get_players(position, price, fpl):

    players = await fpl.get_players()
    matching_players = []

    for player in players:
        if position_converter(player.element_type) == position and player.now_cost <= price:
            matching_players.append(player)

    return matching_players
