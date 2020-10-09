
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
    return {'name': player.web_name, 'totalPoints': player.total_points, 'pointsPerGame': player.points_per_game, "id": player.id}


def player_is_better(player):
    return float(player.points_per_game) + float(player.total_points)
