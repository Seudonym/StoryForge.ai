from transformers import GPT2Tokenizer, GPT2LMHeadModel
from StoryData import StoryData
from torch.optim import Adam
from torch.utils.data import DataLoader
import torch
import tqdm 

def train(storyData, model, optim):
    epochs = 10
    for i in tqdm(range(epochs)):
        for X, a in storyData:
            optim.zero_grad()
            loss = model(X, attention_mask=a, labels=X).loss
            loss.backward()
            optim.step()
        torch.save(model.state_dict(), "model_state.pt") 

def infer(inp):
    inp = "<bos> " + inp + "<bot>: "
    inp = tokenizer(inp)
    output = model.generate(**inp)
    output = tokenizer.decode(output[0])
    return output

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
tokenizer.add_special_tokens({"pad_token": "<pad>",
                              "bos_token": "<bos>",
                              "eos_token": "<eos>"})
tokenizer.add_tokens(["<bot>:"])

model = GPT2LMHeadModel.from_pretrained('gpt2')
model.resize_token_embeddings(len(tokenizer))

storyData = StoryData("chat_data.json", tokenizer)
storyData = DataLoader(storyData, batch_size=64)

optim = Adam(model.parameters())