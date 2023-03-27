FROM python:3.10.10

COPY . .

RUN python -m venv venv

RUN source venv/bin/activate

RUN pip install -r requirements.txt

CMD [ "python", "server.py" ]

EXPOSE 50051:50051