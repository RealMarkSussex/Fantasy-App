
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
    total = float(player.player_data.points_per_game) + float(player.player_data.total_points)
    return total

def get_form(player):
    form = 0
    history = []
    print(type(player.player_summary.history))
    divisor = 1
    games_played_amount = player.player_summary.history.__len__()
    if games_played_amount > 5:
        history = player.player_summary.history[-5:]
        divisor = 5
    else:
        history = player.player_summary.history
        divisor = games_played_amount

    for fixture in history:
        form += fixture["total_points"]
    print(form / divisor)
