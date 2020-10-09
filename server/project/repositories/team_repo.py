async def get_player_team(team_id, fpl):
    return await fpl.get_team(team_id)
