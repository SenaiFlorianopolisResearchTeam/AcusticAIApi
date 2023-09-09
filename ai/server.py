from flask import Flask, jsonify, request
from model.model import count as model
import pg8000

app = Flask(__name__)

@app.route("/")
def ping():
    return "<p>See the docs on: https://github.com/fullzer4/AcustticAI</p>"

def session_belongs_to_user(session_id, user_id):
    conn = pg8000.connect(user="seu_usuario", password="sua_senha", database="seu_banco_de_dados")
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM \"Session\" WHERE id = %s AND userId = %s", (session_id, user_id))
    result = cursor.fetchone()

    cursor.close()
    conn.close()

    return result is not None

@app.route("/count", methods=['POST'])
def count():
    data = request.json
    video = data.get('video')
    line_startX = data.get('line_startX')
    line_startY = data.get('line_startY')
    line_endX = data.get('line_endX')
    line_endY = data.get('line_endY')
    session_id = data.get('session_id')
    user_id = data.get('user_id')

    if None in (video, line_startX, line_startY, line_endX, line_endY, session_id, user_id):
        return jsonify({'error': 'Set all obrigatory parameters'}), 400

    if not session_belongs_to_user(session_id, user_id):
        return jsonify({'error': 'Session does not belong to the user'}), 403

    result = jsonify(model(video, line_startX, line_startY, line_endX, line_endY, session_id, user_id))

    return result

@app.route("/export", methods=['GET'])
def export_data():
    pass

if __name__ == "__main__":
    app.run()