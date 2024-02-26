from google.cloud import storage
import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer

BUCKET = "pt-models"

model = None

def download_blob(bucket, source_blob, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket)
    blob = bucket.blob(source_blob)
    blob.download_to_filename(destination_file_name)
    
def predict(request):
    global model
    if model is None:
        download_blob(BUCKET, "model_state.pt", "/tmp/model_state.pt")
        
    model = GPT2LMHeadModel.from_pretrained('gpt2')
    tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
    tokenizer.add_special_tokens({"bos_token": "<bos>",
                                "eos_token": "<eos>"})
    tokenizer.pad_token = tokenizer.eos_token
    model = GPT2LMHeadModel.from_pretrained('gpt2')
    model.resize_token_embeddings(len(tokenizer))
    state_dict = torch.load("/tmp/model_state.pt")
    model.load_state_dict(state_dict)

    
    # do something with the model
    inp = request.args.get('inp')
    if not inp: return ""
    inp = "<bos>" + inp + "<bot>"
    input_ids = tokenizer.encode(inp, return_tensors='pt')
    output = model.generate(input_ids, max_new_tokens=200, num_return_sequences=1, no_repeat_ngram_size=2)
    return tokenizer.decode(output[0], skip_special_tokens=True)
    