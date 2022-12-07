from flask import Flask, make_response, jsonify
from flask_cors import CORS

app = Flask("DiscordBotServer", static_folder="front");
CORS(app);

@app.route('/', defaults={'path': ''})
@app.route('/<path>', methods=['GET'])
def root(path):
    return make_response(open('templates/index.html').read());
    
@app.route("/api/ping")
def ping():
    return jsonify("Pong!");
    
app.debug = False;
app.run();