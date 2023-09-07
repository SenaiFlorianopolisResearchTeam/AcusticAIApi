from flask import Flask, jsonify
from model.model import count as model

app = Flask(__name__)

@app.route("/")
def ping():
    return "<p>See the docs on: https://github.com/fullzer4/AcustticAI</p>"

@app.route("/count")
def count():
    
    result = jsonify(model("./video/video.mp4", 0, 350, 1300, 350))
    return result

if __name__ == "__main__":
    app.run()