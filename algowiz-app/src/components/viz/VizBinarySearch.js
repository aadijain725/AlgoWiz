import Button from 'react-bootstrap/Button';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bar , defaults} from "react-chartjs-2";
import VizCode from './VizCode';
// import VizBarGraph from './VizBarGraph';

const FILTERED_COLOR = "rgba(0,0,0,0.4)";
const TARGET_COLOR = "rgba(255, 0, 0,0.4)";
const POINTER_COLOR = "rgba(113, 205, 205,0.4)";


class VizBinarySearch extends React.Component {
  constructor(props) {
    super(props);
    let colors = [];
    let copyColors = [];

    // Initializing colors for bars
    for (let i = 0; i <  this.props.barData.length; i++) {
      // console.log("initial color: ", this.props.color);
      colors.push(this.props.color);
      copyColors.push(this.props.color);
    }

    let start = 0
    let end = this.props.barData.length - 1;
    let mid = Math.floor((start + end)/2);

    // Setting up initialState for reset
    const initialState = {
      barData: {
        labels: this.props.barData,
        datasets: [
          {
            label: 'Values',
            data: this.props.barData,
            backgroundColor: copyColors,
          }
        ],
        borderWidth: 100
      }, 
      colorsArray: copyColors,
      changeColors: true,
      points: [this.props.barData[start], this.props.barData[mid], this.props.barData[end]],
      indices: [start, mid, end],
      markEnd : false,
      step: 0
    }
    
    // Initializing state
    this.state = {
      barData: {
        labels: this.props.barData,
        datasets: [
          {
            label: 'Values',
            data: this.props.barData,
            backgroundColor: colors,
          }
        ],
        borderWidth: 100
      }, 
      colorsArray: colors,
      changeColors: true,
      points: [this.props.barData[start], this.props.barData[mid], this.props.barData[end]],
      indices: [start, mid, end],
      markEnd : false,
      step: 0,
      initialState: initialState,
    };

    // Binding, pause, play and reset functions to component
    this.play  = this.play.bind(this); // bind to the component
    this.pause = this.pause.bind(this); // bind to the component
    this.reset = this.reset.bind(this); // bind to the component
  }


  // Animates the targets to the specified colors in the colors array
  animateColors(targets) {
    let colors = this.state.colorsArray;
    let colorsArray = [];
    for(let i =  0; i < colors.length; i++) {
      colorsArray.push(colors[i]);
    }

    for (let i = 0; i < targets.length; i++) {
      colors[targets[i]] = POINTER_COLOR;
    }

    let labels = this.state.barData.labels;
    let data = this.state.barData.datasets[0].data;

    // Re building old state
    let start = this.state.indices[0];
    let mid = this.state.indices[1];
    let end = this.state.indices[2];

    this.setState({
        barData: {
          labels: labels,
          datasets: [
            {
              label: 'Values',
              data: data,
              backgroundColor: colors,
            }
          ],
          borderWidth: 100
      }, 
      colorsArray: colorsArray,
      changeColors: false,
      points: [this.props.barData[start], this.props.barData[mid], this.props.barData[end]],
      indices: [start, mid, end],
      step: 0
    });
  }

  // Filters the data to color the elements according to whether they are 
  // Under consideration to be searched further in the algo
  // Ie. any elements between newStart and newEnd -- considered
  // else color the bars black
  markFiltered(newStart, newEnd) {
    // console.log("changing data");

    let data = this.state.barData.datasets[0].data;
    let colors = [];
    let labels = [];
    
    // Update colors according to isfiltered
    for (let i = 0; i < data.length; i++) {
      if (i <= newEnd && i >= newStart) {
        colors.push(this.state.colorsArray[i]);
      } else {
        colors.push(FILTERED_COLOR);
      }
      labels.push(this.state.barData.labels[i]);
    }
    
    // Rebuilding state
    let start = newStart;
    let end = newEnd;
    let mid = Math.floor((start+end)/2);

    this.setState({
      barData: {
        labels: labels,
        datasets: [
          {
            label: 'Values',
            data: data,
            backgroundColor: colors,
          }
        ],
        borderWidth: 100
      },
      colorsArray: colors,
      changeColors: true,
      points: [data[start], data[mid], data[end]],
      indices: [start, mid, end],
      step: 1
    });

  }

  // Once the target element is found,
  // Coloring the found target element to TARGET_COLOR
  markEnd(idx) {
    let length = this.props.barData.length;
    let colors = [];
    for(let i =  0; i < length; i++) {
      colors.push(FILTERED_COLOR);
    }
    colors[idx] = TARGET_COLOR;

    let labels = this.state.barData.labels;
    let data = this.state.barData.datasets[0].data;

    this.setState({
        barData: {
          labels: labels,
          datasets: [
            {
              label: 'Values',
              data: data,
              backgroundColor: colors,
            }
          ],
          borderWidth: 100
      }, 
      colorsArray: colors,
      changeColors: false,
      markEnd: true,
      step: 2
    });
  }

  // Represents 1 step in the algorithm, steps to the next state
  step() {
    let arr = this.state.barData.datasets[0].data; // current dataset
    let x = this.props.target; // Target 
    let changeColors = this.state.changeColors;
    let start=this.state.indices[0], end=this.state.indices[2];    
    // Find the mid index
    let mid=Math.floor((start + end)/2);
    console.log("mid is: ", mid);
    console.log("start", start);
    console.log("end", end);

    console.log("Initial state: ", this.state.initialState);


    if (changeColors) { // Need to color updated start, mid and end
      this.animateColors([start, mid, end]);
    } else { // step through code
        // If element is present at mid, return True
      if (arr[mid]===x) { // Target has been reached
        this.markEnd([mid]);
      }
      // Else look in left or right half accordingly
      // And filter accordingly 
      else if (arr[mid] < x) {
            start = mid + 1;
            this.markFiltered(start, end);
      }
      else {
            end = mid - 1;
            this.markFiltered(start, end);
      }
    }
  }
  // STARTS animating, ie. stepping through the binary search code
  play() {
      console.log("interval is null: ", this.interval == null);
      if(!this.interval) { // If animation isn't already running
        this.interval = setInterval(() => {
          console.log("initialState ", this.state.initialState);
          if (this.state.markEnd) {
            this.pause();
          } else {
            this.step()
          }
        }, 1000);
    }
  }

  // STOPS animating, ie. stepping through the binary search code
  pause() {
    clearInterval(this.interval);
    this.interval = null;
  }

  // RESETS the visualizer to the initial state.
  reset() {
    if (this.interval) { // animation is running
      this.pause();
    }
    let colors = [];
    for (let i = 0; i <  this.props.barData.length; i++) {
      // console.log("initial color: ", this.props.color);
      colors.push(this.props.color);
    }

    let start = 0
    let end = this.props.barData.length - 1;
    let mid = Math.floor((start + end)/2);
    const initialState = {
      barData: {
        labels: this.props.barData,
        datasets: [
          {
            label: 'Values',
            data: this.props.barData,
            backgroundColor: colors,
          }
        ],
        borderWidth: 100
      }, 
      colorsArray: colors,
      changeColors: true,
      points: [this.props.barData[start], this.props.barData[mid], this.props.barData[end]],
      indices: [start, mid, end],
      markEnd : false,
      step: 0
    }
    this.setState(initialState);
    // window.location.reload(false);
  }

  render() {
    return (
      <Container>
        {/* <Row>
            <h1> Testing:: </h1>
            <VizBarGraph></VizBarGraph>
        </Row> */}
        <Row>
          <Col xs = "9">
          <Bar
            data = {this.state.barData}
            options = {{
                xAxes: [{
                    gridLines: { 
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                }}],
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                } 
            }}
            ></Bar>
          </Col>
          <Col>
            <VizCode 
            step={this.state.step} 
            start = {this.state.points[0]} 
            mid = {this.state.points[1]} 
            end = {this.state.points[2]} 
            target = {this.props.target}/>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default VizBinarySearch;
