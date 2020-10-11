
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
            'form': round(get_form(player), 2),
            'fixtureDifficulty': get_fixture_difficulty(player),
            'id': player.player_data.id,
            'teamName': player.team_data.name,
            'markScore': round(player_is_better(player), 2)}


def player_is_better(player):
    total = get_form(player) - get_fixture_difficulty(player)
    return total


def get_form(player):
    form = 0
    history = []
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

    if divisor == 0:
        return 0

    return form / divisor


def get_fixture_difficulty(player):
    total_fixture_difficulty = 0

    for fixture in player.player_summary.fixtures[:5]:
        total_fixture_difficulty += fixture["difficulty"]

    return total_fixture_difficulty / 5
