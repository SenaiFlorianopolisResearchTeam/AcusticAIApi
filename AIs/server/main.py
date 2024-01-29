from fastapi import FastAPI
from prometheus_fastapi_instrumentator import Instrumentator
from server.user.router import router
from server.models.hello import HelloResponse

app = FastAPI()
Instrumentator().instrument(app).expose(app)

@app.get("/", response_model=HelloResponse)
async def root():
    return {"message": "Hello World"}

app.include_router(router)