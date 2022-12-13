import requests 
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/')
def index():
    url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={36d5e340a45394ac57e7f479840d8fab}'
    city = 'Las Vegas'

    r = requests.get(url.format(city)).json()
    print(r)

    weather = {
        'city' : city,
        'temperature' : r ['main']['temp'],
        'description' : r ['weather'][0]['description'],
        'icon' : r['weather'][0]['icon'],
    }

    return render_template('weather.html', weather=weather)
