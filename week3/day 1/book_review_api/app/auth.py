from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from passlib.hash import bcrypt
import psycopg2
from database import get_db_connection
from fastapi import Form
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from datetime import datetime , timedelta

router = APIRouter()

SECRET_KEY = "azer"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

class UserRegister(BaseModel):
    username: str
    password: str

@router.post("/register")
def register(user: UserRegister):
    conn = get_db_connection()
    cur = conn.cursor()

    # Check if username already exists
    cur.execute("SELECT * FROM users WHERE username = %s", (user.username,))
    if cur.fetchone():
        raise HTTPException(status_code=400, detail="Username already exists")

    # Hash the password
    hashed_password = bcrypt.hash(user.password)

    # Insert the new user
    cur.execute(
        "INSERT INTO users (username, password) VALUES (%s, %s)",
        (user.username, hashed_password)
    )
    conn.commit()
    cur.close()
    conn.close()

    return {"message": "User registered successfully"}


@router.post("/login")
def login(form_data : OAuth2PasswordRequestForm = Depends()):
    conn = get_db_connection()
    cur = conn.cursor()

    #get user by name
    cur.execute("SELECT * FROM users WHERE username = %s", (form_data.username,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    if not user : 
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    stored_pw = user[2]

    if not bcrypt.verify(form_data.password , stored_pw):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    access_token = create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}


def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
