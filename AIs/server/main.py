from flask import Flask

app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/count", methods=['post'])
def count():
    return 1

if __name__ == "__main__":
    app.run(debug=True)