# import http.client, urllib.request, urllib.parse, urllib.error, base64, json, io
import pandas as pd
import requests

# params = urllib.parse.urlencode({})
# try:
# conn = http.client.HTTPSConnection('localhost')
# print(conn)
# conn.request("GET", ":5000/data")
# response = conn.getresponse()
# data_response = response.read()
# conn.close()
# except Exception as e:
# print("[Errno {0}] {1}".format(e.errno, e.strerror))

# s = str(data_response, 'utf-8')
# x = json.loads(s)
url = "http://127.0.0.1:5000/data"

data_json = requests.get(url=url)
x = data_json.json()

data = x['products']
data = pd.DataFrame(data)
# print(data)
data.to_csv('data1.csv', index=False)
