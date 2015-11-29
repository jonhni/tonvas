const React = require('react');
const DrawableCanvas = require('./DrawableCanvas.jsx');
require('../styles/style.scss');

const App = React.createClass({
  render() {
    let ops = {
      brushColor: "#800909",
      lineWidth: 4,
      width:400,
      height:400,
      canvasStyle: {
        backgroundColor: "#00FFDC"
      }
    };
    let ops1= {
      brushColor: "#0033cc",
      lineWidth: 4,
      width:200,
      height:200,
      canvasStyle: {
        backgroundColor: "#00ff00"
      }
    };
    let ops2= {
      brushColor: "#00ffff",
      lineWidth: 4,
      width:300,
      height:300,
      canvasStyle: {
        backgroundColor: "#ffff00"
      }
    };
    let ops3= {
      brushColor: "#ffffff",
      lineWidth: 4,
      width:300,
      height:300,
      canvasStyle: {
        backgroundColor: "#ff66ff"
      }
    };

    return (
        <div className="canvasWrapper">
          <div className="canvas">
            <DrawableCanvas ops={ops} />
          </div>
          <div className="canvas">
            <DrawableCanvas ops={ops1} />
          </div>
          <div className="canvas">
              <DrawableCanvas ops={ops2} />
          </div>
          <div className="canvas">
              <DrawableCanvas ops={ops3} />
          </div>
        </div>
    );
  }
});
module.exports = App;
