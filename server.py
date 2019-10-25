from flask import Flask, jsonify, make_response
from flask_headers import headers
import requests
import json
import random

app = Flask(__name__)


def random_vars():

    gtin = str(random.randint(4548735003446, 9999999999999))
    tpnc1 = str(random.randint(454873500, 999999999))
    tpnc2 = str(random.randint(454873500, 999999999))
    catid = str(random.randint(111, 999) + '-' + random.randint(1000, 9999))

    return gtin, tpnc1, tpnc2, catid


@app.route("/data", methods=['GET'])
def get_data():  #gtin, tpnc1, tpnc2, catid):
    lista = []
    headers = {
        'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f',
    }

    core_link = 'https://dev.tescolabs.com/product/?'
    nastavak_gtin = 'gtin='
    nastavak_tpnc = 'tpnc='
    nastavak_catid = 'catid='
    gtin = '4548736003446'
    catid = '527-4164'
    url = core_link + nastavak_gtin + gtin

    link_products = 'https://dev.tescolabs.com/grocery/products/?query=egg&offset=0&limit=10'
    response = requests.get(url=link_products, headers=headers)
    # ovde je data kao json, kupi sve proizvode sa link_products
    data = response.json()
    # print(data['uk']['ghs']['products']['results'][0]['id'])

    for i in range(10):
        id = data['uk']['ghs']['products']['results'][i]['id']
        lista.append(id)
    lista = [str(i) for i in lista]  # list int -> list str

    link_tpnc = 'https://dev.tescolabs.com/product/?tpnc='
    link_tpnc = 'https://dev.tescolabs.com/product/?tpnc=' + lista[0]

    for i in lista[1:]:
        link_tpnc += '&tpnc=' + i

    response_final = requests.get(url=link_tpnc, headers=headers)
    data_final = response_final.json()
    return jsonify(data_final)


if __name__ == "__main__":
    app.run()