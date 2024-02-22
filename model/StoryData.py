from torch.utils.data import Dataset
import json

class StoryData(Dataset):
    def __init__(self, path, tokenizer):
        self.data = json.load(open(path, 'r'))
        self.X = []      

        for i in self.data:
            for j in i['dialog']:
                self.X.append(j['text'])
        
        for idx, i in enumerate(self.X):
            try:
                self.X[idx] = "<bos> " + i + "<bot>: " + self.X[idx + 1] + " <eos>"
            except:
                break 

        print(self.X[0])
        
        self.X_encoded = tokenizer(self.X, truncation=True)
        self.input_ids = self.X_encoded['input_ids']
        self.attention_mask = self.X_encoded['attention_mask']
        
    def __len(self):
        return len(self.X)
    
    def __getitem__(self, index):
        return (self.input_ids, self.attention_mask)