# import http.client, urllib.request, urllib.parse, urllib.error, base64, json, io
import pandas as pd
import requests
from pandas.io.json import json_normalize

url = "http://127.0.0.1:5000/data"

data_json = requests.get(url=url)
x = data_json.json()

data = x['products']

res = json_normalize(data)#, 'productCharacteristics',)
data = pd.DataFrame(res)
print(data['productCharacteristics.healthScore'])
data.to_csv('data1.csv', index=False)
