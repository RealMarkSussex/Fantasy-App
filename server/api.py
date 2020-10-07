from fpl import FPL
import aiohttp
import asyncio
import flask
from flask import request, jsonify
import json
from flask_cors import CORS


app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


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


def player_to_json(player):
    return {'name': player.first_name + player.second_name, 'form': player.value_form, 'pointsPerGame': player.points_per_game, "id": player.id}


@app.route('/top5Players', methods=['GET'])
def top_five_players():
    position = request.args.get('positon')
    price = float(request.args.get('price')) * 10
    players = asyncio.run(get_player(position, price))
    players.sort(key=player_is_better, reverse=True)
    jsonPlayers = []
    for player in players[:5]:
        jsonPlayers.append(player_to_json(player))
    return jsonify(jsonPlayers)


app.run()
