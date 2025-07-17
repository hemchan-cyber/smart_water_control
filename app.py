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

if __name__ == '__main__':
    app.run(debug=True)
