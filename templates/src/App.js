import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>What's the weather like?</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" />
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              What's the weather like?
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-4 is-4">
              <form method="POST">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input className="input" name="city" type="text" placeholder="City Name" />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      Add City
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-4 is-4">
              {/* { for weather in weather_data } */}
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-50x50">
                      <img src="http://openweathermap.org/img/w/{{ weather.icon }}.png" alt="Image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <span className="title">{weather.city}</span>
                        <br />
                        <span className="subtitle">{weather.temperature}° F</span>
                        <br /> {weather.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              {/* { endfor } */}
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
