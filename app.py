from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("welcome.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/loading')
def loading():
    return render_template("loading.html")

@app.route('/dashboard')
def dashboard():
    return render_template("index.html")

import os

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # use Render's PORT or default to 5000 locally
    app.run(host='0.0.0.0', port=port, debug=True)

