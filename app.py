from flask import *
import os
app = Flask(__name__)

@app.route('/css/<filename>')
def css(filename):
    return send_from_directory('css', filename)

@app.route('/js/<filename>')
def js(filename):
    return send_from_directory('js', filename)

@app.route('/images/<filename>')
def images(filename):
    return send_from_directory('images', filename)

@app.errorhandler(404)
def error404(error):
    return render_template('web/error404.html')
@app.route('/')
def home():
    return render_template('web/home.html')

if __name__ == '__main__':
    os.system('clear')
    app.run('0.0.0.0', 80, debug=True)