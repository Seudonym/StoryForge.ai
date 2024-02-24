from fastapi import FastAPI, UploadFile, File
import uvicorn
import torch
from transformers import GPT2LMHeadModel, GPT2Config

app = FastAPI()

# Load a PT model: model.pt
model = GPT2LMHeadModel.from_pretrained('gpt2')
state_dict = torch.load("../model/model_state.pt")
model.load_state_dict(state_dict)

@app.post('/api/options')
async def generate():
    pass

if __name__ == '__main__':
    uvicorn.run('main:app', host='localhost', port=8000, reload=True)