from fpl import FPL
import aiohttp
import asyncio
import flask
from flask import request, jsonify
from flask_cors import CORS
from project.repositories.player_repo import get_top_five_players

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


@app.route('/top5Players', methods=['GET'])
def top_five_players():
    return asyncio.run(run_top_five_players())


async def run_top_five_players():
    session = aiohttp.ClientSession()
    fpl = FPL(session)
    position = request.args.get('position')
    price = float(request.args.get('price')) * 10
    top_five_players = await get_top_five_players(position, price, fpl)
    await session.close()
    return jsonify(top_five_players)


app.run()
