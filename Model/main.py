from fastapi import FastAPI
from fastapi.testclient import TestClient
from server.user.router import router
from server.models.hello import HelloResponse

app = FastAPI()

@app.get("/", response_model=HelloResponse)
async def root():
    return {"message": "Hello World"}

app.include_router(router)