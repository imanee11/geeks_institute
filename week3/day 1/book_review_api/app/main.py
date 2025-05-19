from fastapi import FastAPI
from database import init_db
import auth

app = FastAPI()

@app.on_event("startup")
def startup():
    init_db()

app.include_router(auth.router)

@app.get("/")
def home():
    return {"message": "Welcome to the Book Review API"}
