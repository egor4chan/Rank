from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def page():
    return render_template('index.html')

@app.route('/store')
def store():
    return render_template('store.html')

@app.route('/case')
def case():
    return render_template('case.html')

@app.route('/frens')
def frens():
    return render_template('frens.html')

@app.route('/top')
def top():
    return render_template('top.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')