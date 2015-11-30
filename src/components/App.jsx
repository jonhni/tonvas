const React = require('react');
const DrawableCanvas = require('./DrawableCanvas.jsx');
require('../styles/style.scss');

const App = React.createClass({
  getInitialState: function() {
    return {
      brushColor: "#800909",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#00FFDC"
      },
      coordinates: {
        x: 0,
        y: 0
      }
    };
  },
  handleOnClickAnimate(){
    for(let i = 0; i < 100; i++){
      this.setState({
        coordinates: {
          x: i,
          y: i
        }
      });
    }
  },
  handleOnClickAnimate1(){
    for(let i = 200; i > 0; i--){
      this.setState({
        coordinates: {
          x: i,
          y: 200 - i
        }
      });
    }
  },
  render() {
    return (
      <div>
        <button onClick={this.handleOnClickAnimate}>Animate</button>
          <button onClick={this.handleOnClickAnimate1}>Animate1</button>
        <div className="canvasWrapper">
          <div className="canvas">
            <DrawableCanvas {...this.state} />
          </div>
          <div className="canvas">
            <DrawableCanvas {...this.state} />
          </div>
          <div className="canvas">
              <DrawableCanvas {...ops2} />
          </div>
          <div className="canvas">
              <DrawableCanvas {...ops3} />
          </div>
        </div>
        <DrawableCanvas {...ops4}/>
      </div>

    );
  }
});
let ops = {
  brushColor: "#800909",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#00FFDC"
  },
  coordinates: {
    x: 0,
    y: 0
  }
};
let ops1 = {
  brushColor: "#0033cc",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#00ff00"
  }
};
let ops2 = {
  brushColor: "#00ffff",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ffff00"
  }
};
let ops3 = {
  brushColor: "#ffffff",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ff66ff"
  }
};
let ops4 = {
  brushColor: "#333300",
  lineWidth: 4,
  canvasStyle: {
    backgroundColor: "#ff0000"
  }
};
module.exports = App;
