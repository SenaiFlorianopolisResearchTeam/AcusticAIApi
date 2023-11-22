from flask import Flask, jsonify, request
from flask_cors import CORS
from model.model import count as model
import pg8000

app = Flask(__name__)
CORS(app)

db_config = {
    "user": "fullzer4",
    "password": "123456",
    "database": "acustticai",
}

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

@app.route("/fakeRoute/<session_name>/<int:user_id>/<int:tmin>", methods=['GET'])
def fake_route(session_name, user_id, tmin):
    fake_data = [
        {
            "vehicle_type": "caminhaog",
            "in": 2,
            "out": 1
        },
        {
            "vehicle_type": "caminhaop",
            "in": 0,
            "out": 2
        },
        {
            "vehicle_type": "carro",
            "in": 15,
            "out": 32
        },
        {
            "vehicle_type": "moto",
            "in": 6,
            "out": 8
        },
        {
            "vehicle_type": "onibus",
            "in": 4,
            "out": 1
        },
        {
            "vehicle_type": "tuktuk",
            "in": 0,
            "out": 0
        },
        {
            "vehicle_type": "van",
            "in": 2,
            "out": 3
        },
    ]

    conn = pg8000.connect(**db_config)
    cursor = conn.cursor()

    for data_point in fake_data:
        cursor.execute(
            """
            INSERT INTO "Session" (name, userId, tmin, data)
            VALUES (${session_name}, ${user_id}, ${tmin}, ${data_point})
            """,
            {
                "session_name": session_name,
                "user_id": user_id,
                "tmin": tmin,
                "data_point": data_point
            }
        )

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify(fake_data)

if __name__ == "__main__":
    app.run()