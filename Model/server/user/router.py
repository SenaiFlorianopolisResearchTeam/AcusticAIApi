from fastapi import APIRouter

router = APIRouter()

@router.get("/items/")
async def read_items():
    return {"message": "Read items"}

@router.post("/items/")
async def create_item():
    return {"message": "Create item"}