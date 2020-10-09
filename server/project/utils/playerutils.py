
def position_converter(position):
    position_map = {
        1: "Goalkeeper",
        2: "Defender",
        3: "Midfielder",
        4: "Forward"
    }
    return position_map[position]


def players_to_json(players):
    json_players = []
    for player in players[:5]:
        json_players.append(player_to_json(player))
    return json_players


def player_to_json(player):
    return {'name': player.player_data.web_name,
            'totalPoints': player.player_data.total_points, 
            'pointsPerGame': player.player_data.points_per_game, 
            'id': player.player_data.id,
            'teamName': player.team_data.name}


def player_is_better(player):
    return float(player.player_data.points_per_game) + float(player.player_data.total_points)
