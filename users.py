from server import app
from flask import request, redirect


@app.route('/signup', methods=['POST'])
def signup():
    pass


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['name']  # name sa frontenda
        return '200'
    else:
        user = request.args.get('name')
        return '222'


@app.route('/register')
def register():
    pass


@app.route('/update')
def update():
    pass