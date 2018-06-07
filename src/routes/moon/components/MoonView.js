const React = require('react');
const MoonPhase = require('./MoonPhase');
const Axios = require('axios');
const Classes = require('./MoonView.scss');

module.exports = class MoonView extends React.Component {

    constructor() {

        super();

        this.state = {
            duckClick: 0,
            clickCount: 0,
            now: Date.now(),
            moonId: 1,
            moonName: 'cool'
        };
    }

    componentDidMount() {
      //const Id;
        const getMoonPhase = Axios.get(`http://api.farmsense.net/v1/moonphases/?d=${this.state.now}`)
        .then( (response) => {
            this.setState({
                moonId: response.data[0].Index
            });


        })
      .catch((error) => {
          console.log('Error displaying Moon Image', error);
      });

        const getMoonName = Axios.get(`http://api.farmsense.net/v1/moonphases/?d=${this.state.now}`)
        .then( (response) => {
            console.log(response.data[0].Moon[0]);
            this.setState({
                moonName: response.data[0].Moon[0]
            });


        })
      .catch((error) => {
          console.log('Error with Moon Name', error);
      });


    }

    clickMoon() {

        this.setState({
            clickCount: this.state.clickCount + 1
        });
    }
    clickDuck() {

        this.setState({
            duckClick: this.state.duckClick + 1
        });
    }

    render() {
        return <div>
            <h4>The current moment is {Date(this.state.now)}</h4>
            <h4>The phase is  {this.state.moonName}</h4>
            <MoonPhase moonId={this.state.moonId} onClick={() => this.clickMoon()} />
            <div className={Classes.first}>
                <p>
            MoonPhases are an important part of our everyday life.
                </p>
                <p>
            Many farmers use moon phases to plan their crop development and
            many
                </p>
                <a href='https://en.wikipedia.org/wiki/Woody_Woodpecker'>
                    <b> woodcutters </b>
                </a>
            "use the phases of the moon to plan when they will cut."
            </div>
            <ul>
                <li> This moon has been clicked {this.state.clickCount} times.</li>
                <li> The Id of this moon is {this.state.moonId}.</li>
                <li> The Space Duck has been clicked {this.state.clickCount} times. </li>
            </ul>
            <div>
                <img src='https://hapipal.com/public/img/pal.svg' alt='Big Room Studios' onClick={() => this.clickDuck()} />
            </div>

        </div>;
    }
};
