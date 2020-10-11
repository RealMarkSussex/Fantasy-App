from ..utils.playerutils import player_is_better, players_to_json, position_converter
from .team_repo import get_player_team


async def get_top_five_players(position, price, fpl):
    players = await get_players(position, price, fpl)
    team_players = []
    for player in players:
        player_team = await get_player_team(player.team, fpl)
        player_summary = await get_player_summary(player.id, fpl)
        team_players.append(TeamPlayer(player, player_team, player_summary))
    team_players.sort(key=player_is_better, reverse=True)
    json_players = players_to_json(team_players)
    return json_players


async def get_players(position, price, fpl):
    players = await fpl.get_players()
    matching_players = []

    for player in players:
        if position_converter(player.element_type) == position and player.now_cost <= price:
            matching_players.append(player)

    return matching_players


async def get_player_summary(player_id, fpl):
    return await fpl.get_player_summary(player_id)


class TeamPlayer:
    def __init__(self, player_data, team_data, player_summary):
        self.team_data = team_data
        self.player_data = player_data
        self.player_summary = player_summary
