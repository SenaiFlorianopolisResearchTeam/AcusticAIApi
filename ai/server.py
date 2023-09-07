from flask import Flask
from model.model import count as model

app = Flask(__name__)

@app.route("/")
def ping():
    return "<p>See the docs on: https://github.com/fullzer4/AcustticAI</p>"

@app.route("/count")
def count():
    line_start = (0, 600)
    line_end = (1240, 600)
    
    result = model("./video/video.mp4", line_start, line_end)
    return result

if __name__ == "__main__":
    app.run()