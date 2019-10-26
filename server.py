from flask import Flask, jsonify, make_response, request
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



##########################################
@app.route('/scan', methods=['POST'])
def scan():
    headers = {
        'Ocp-Apim-Subscription-Key': 'd0b50598ab85402a9238cb2528924e3f',
    }
    form = request.form
    bar_code = form['bar_code']
    label = form['label']
    store = form['store']

    product_link = 'https://dev.tescolabs.com/product/?tpnc=' + bar_code
    response = requests.get(url=product_link, headers=headers)
    product_data = response.json()

    if product_data['products'][0]['productCharacteristics']['isFood']:
        if label == 'Use By':
            if product_data['products'][0]['productCharacteristics']['storageType'] == 'Chilled':
                return 'save to database'
            else:
                return 'ne moze da se koristi'
        if label == "Best Before" or label == "Display Until":
            return 'save to database'
        else:
            return 'ne moze da se koristi'
    else:
        return 'its not food'

    return jsonify(product_data)


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    form = request.form
    name = form['name']
    password = form['password']
    return '200'


@app.route('/login', methods=['POST', 'GET'])
def login():
    # if request.method == 'POST':
        # user = request.form['name']  # name sa frontenda
        # return '200'
    # else:
        # user = request.args.get('name')
    return '200'


@app.route('/register', methods=['POST', 'GET'])
def register():
    return '200'


@app.route('/update', methods=['POST', 'GET'])
def update():
    return '200'

if __name__ == "__main__":
    app.run()