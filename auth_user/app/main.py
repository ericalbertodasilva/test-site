from datetime import datetime
import logging

from typing import Union
from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel

class UserVerification(BaseModel):
    id: str

app = FastAPI()

@app.get("/")
def index():
    return {'status':'api-activa'}


@app.post("/v1/user_verification/")
async def user_verification(
    user_verification: UserVerification, 
    authorization: Union[str, None] = Header(default='')):
    token = authorization.replace('Bearer ','') if authorization != None else ''

    if token == 'SYa6c_LMzNdADqgo8vy37OT-G-ZWbZTu5qG_z1CboBQ':
        if user_verification.id == '10':
            return {'id':user_verification.id, 'account_status':'active'}
        elif user_verification.id == '20':
            return {'id':user_verification.id, 'account_status':'disabled'}
        else:
            logging.warning('user id not found - {}'.format(str(datetime.now())))
            raise HTTPException(status_code=404, detail="User id not found")
    else:
        logging.warning('unauthorized login attempt - {}'.format(str(datetime.now())))
        raise HTTPException(status_code=401, detail="Unauthorized")

@app.post("/v1/new_question/")
async def new_question(
    user_verification: UserVerification, 
    authorization: Union[str, None] = Header(default='')):
    token = authorization.replace('Bearer ','') if authorization != None else ''

    if token == 'SYa6c_LMzNdADqgo8vy37OT-G-ZWbZTu5qG_z1CboBQ':
        if user_verification.id == '10':
            return {'id':user_verification.id, 'question':'<html>'}
        elif user_verification.id == '20':
            return {'id':user_verification.id, 'detail':'no question'}
        else:
            logging.warning('user id not found - {}'.format(str(datetime.now())))
            raise HTTPException(status_code=404, detail="User id not found")
    else:
        logging.warning('unauthorized login attempt - {}'.format(str(datetime.now())))
        raise HTTPException(status_code=401, detail="Unauthorized")