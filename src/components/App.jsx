const React = require('react');
const DrawableCanvas = require('./DrawableCanvas.jsx');
require('../styles/style.scss');

const App = React.createClass({
  render() {
    let ops = {
      brushColor: "#800909",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#00FFDC"
      }
    };
    let ops1= {
      brushColor: "#0033cc",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#00ff00"
      }
    };
    let ops2= {
      brushColor: "#00ffff",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#ffff00"
      }
    };
    let ops3= {
      brushColor: "#ffffff",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#ff66ff"
      }
    };
    let ops4= {
      brushColor: "#333300",
      lineWidth: 4,
      canvasStyle: {
        backgroundColor: "#ff0000"
      }
    };


    return (
      <div>
        <div className="canvasWrapper">
          <div className="canvas">
            <DrawableCanvas {...ops} />
          </div>
          <div className="canvas">
            <DrawableCanvas {...ops1} />
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
module.exports = App;
