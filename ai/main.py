from src.core.infra.server import Server
import uvicorn

if __name__ == "__main__":
    server_instance = Server()

    @server_instance.server.get("/")
    def ping():
        return {"res": "read the docs"}

    uvicorn.run(server_instance.server, host="127.0.0.1", port=8000)
