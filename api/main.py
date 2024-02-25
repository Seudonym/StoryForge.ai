from fastapi import FastAPI, UploadFile, File
import uvicorn
import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

app = FastAPI()

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


@app.post('/api/story')
async def infer(inp: str):
    inp = "<bos>" + inp + "<bot>"
    input_ids = tokenizer.encode(inp, return_tensors='pt')
    output = model.generate(input_ids, max_length=100, num_return_sequences=1, no_repeat_ngram_size=2)
    return tokenizer.decode(output[0], skip_special_tokens=True)

if __name__ == '__main__':
    uvicorn.run('main:app', host='localhost', port=8000, reload=True)