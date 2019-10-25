import pandas as pd 
from sklearn import tree
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
import numpy as np
import requests as req
import json



def get_data() -> pd.DataFrame:
    url = "https://dev.tescolabs.com/grocery/products/?query=%7Bquery%7D&offset=%7Boffset%7D&limit=%7Blimit%7D"
    header = {
        'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f'
    }
    r = req.get(url, headers=header)
    print(r)




def main():
    get_data()






if __name__ == "__main__":
    main()
