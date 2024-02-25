from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from openai import OpenAI
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

origins = [
    "*",  # Allow requests from this origin
    # Add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

torch.set_default_device("cuda")

# Load a PT model: model.pt
model = GPT2LMHeadModel.from_pretrained('gpt2')
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
tokenizer.add_special_tokens({"bos_token": "<bos>",
                              "eos_token": "<eos>"})
tokenizer.pad_token = tokenizer.eos_token
model = GPT2LMHeadModel.from_pretrained('gpt2')
model.resize_token_embeddings(len(tokenizer))
state_dict = torch.load("../model/model_state.pt")
model.load_state_dict(state_dict)

class Item(BaseModel):
    inp: str


@app.post('/api/story')
async def infer(item: Item):
    inp = item.inp
    if not inp: return ""
    inp = "<bos>" + inp + "<bot>"
    input_ids = tokenizer.encode(inp, return_tensors='pt')
    output = model.generate(input_ids, max_new_tokens=100, num_return_sequences=1, no_repeat_ngram_size=2)
    return tokenizer.decode(output[0], skip_special_tokens=True)

if __name__ == '__main__':
    uvicorn.run('main:app', host='localhost', port=8000, reload=True)


client = OpenAI(api_key=os.getenv("OPENAI_KEY"))

image_url = ""
@app.post("/api/image")
async def index(item:Item):
    response = client.images.generate(
            model="dall-e-2",
            prompt = item.inp,
            size="256x256",
            quality = "standard",
            n = 1,
            )
    image_url = response.data[0].url
    return image_url