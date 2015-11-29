const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = React.PropTypes;

const DrawableCanvas = React.createClass({
  propTypes: {
    // TODO:
  },

  getDefaultProps() {
    // TODO:
  },
  getInitialState(){
    return {
      canvas: null,
      context: null,
      drawing: false,
      lastX: 0,
      lastY: 0
    };
  },
  componentDidMount(){
    let canvas = ReactDOM.findDOMNode(this);

    canvas.width = this.props.ops.width;
    canvas.height = this.props.ops.height;

    let ctx = canvas.getContext('2d');
    let offsetleft = canvas.getBoundingClientRect();
    this.setState({
      canvas: canvas,
      context: ctx
    });
  },

  handleOnMouseDown(e){
    let rect = this.state.canvas.getBoundingClientRect();
    this.state.context.beginPath();
    this.setState({
      lastX: e.clientX - rect.left,
      lastY: e.clientY - rect.top
    });
    this.setState({
      drawing: true
    });
  },
  handleOnMouseMove(e){

    if(this.state.drawing){
      let rect = this.state.canvas.getBoundingClientRect();
      let lastX = this.state.lastX;
      let lastY = this.state.lastY;
      let currentX = e.clientX - rect.left;
      let currentY = e.clientY - rect.top;
      
      this.draw(lastX, lastY, currentX, currentY);
      this.setState({
        lastX: currentX,
        lastY: currentY
      });
    }
  },
  handleonMouseUp(){
    this.setState({
      drawing: false
    });
  },
  draw(lX, lY, cX, cY){
    this.state.context.strokeStyle=this.props.ops.brushColor;
    this.state.context.lineWidth=this.props.ops.lineWidth;
    this.state.context.moveTo(lX,lY);
    this.state.context.lineTo(cX,cY);
    this.state.context.stroke();
  },

  render() {
    return (
      <canvas style={this.props.ops.canvasStyle}
        onMouseDown={this.handleOnMouseDown}
        onMouseMove={this.handleOnMouseMove}
        onMouseUp={this.handleonMouseUp}
      >
      </canvas>
    );
  }

});

module.exports = DrawableCanvas;
