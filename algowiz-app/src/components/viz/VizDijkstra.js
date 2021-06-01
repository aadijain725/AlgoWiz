import React from "react";
import ReactFlow from "react-flow-renderer";
import CustomGraph from "./CustomGraph";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { DijkstraAnimations } from "./Algorithms/DijkstraAlgorithms";
import VizDisjktraCode from "./VizDijsktraCode"

export class VizDijsktra extends React.Component {
    startingStepNumber = -1;
    visualizationSpeed = 1000;
    initialTimeCounter = 0;
    initialNumberNodes = 10;

    state = {
        numberNodes: this.initialNumberNodes, // the number of nodes in the graph
        graph: CustomGraph.slice(), // the graph to be displayed
        speed: this.visualizationSpeed, // the speed of the visualizer
        play_timer_counter: this.initialTimeCounter, // to keep track of the counter of play button
        step: this.startingStepNumber, // start step with -1
        lastExecutedStep: -1, // to keep track of the last executed step. Helps in the reset() functionality
        codeStep : -1
    };


    startNode = CustomGraph.slice()[0].id;
    endNode = CustomGraph.slice()[9].id;

    vertices = this.getVertices();
    edges = this.getEdges();
    animations_info = DijkstraAnimations(this.vertices, this.edges, this.startNode, this.endNode);

    resetPressed = false;
    pausePressed = false;

    listOfTimeouts = [] // to store the different timeouts


    // this animates that is being explored. The node whose neigbors will be explored
    animateOneExploredNodes(index, time_counter) {
        var timeoutID = setTimeout(() => {
            if (this.resetPressed) {
                return;
            }

            //this.pauseProgram() // to pause the program

            let copyGraph = [...this.state.graph];
            let item = { ...copyGraph[index] };
            let style = { ...item.style };
            style.background = "red"; // setting the color of node being explored to red
            item.style = style;

            copyGraph[index] = item;
            this.setState({ graph: copyGraph, codeStep : 1 });
        }, this.state.speed * time_counter);
        this.listOfTimeouts.push(timeoutID)
    }

    // to animate when initial the wights of nodes are updated
    getInitialDistanceAnimation() {
        if (this.resetPressed) {
            return;
        }

        let copyGraph = [...this.state.graph];
        let getInitialDistance = this.animations_info.getInitialDistance;
        for (let i = 0; i < getInitialDistance.length; i++) {
            let item = { ...copyGraph[i] };
            let data = { ...item.data };
            data.label = getInitialDistance[i].label;
            item.data = data;

            // to change the color at weighht initialization
            let style = { ...item.style };
            style.background = "yellow"
            item.style = style
            //data.label= getInitialDistance.label
            copyGraph[i] = item;
        }
        this.setState({ graph: copyGraph, codeStep : 0 });
    }

    // to get animation for a single neigbor. animate the edge to the neigbor
    // and animate the neighbor node itself
    getNeigborAnimation(nodeIndex, weightChangedTo, edgeID, edgeIndex, new_node_label, time_counter) {
        var timeoutID = setTimeout(() => {
            if (this.resetPressed) {
                return;
            }

            //this.pauseProgram() // to pause the program

            let copyGraph = [...this.state.graph];

            // to animate the edge to the neigbhor
            let edgeitem = { ...copyGraph[edgeIndex] };

            let edgeanimated = { ...edgeitem.animated };
            edgeanimated = true;

            edgeitem.animated = edgeanimated;
            copyGraph[edgeIndex] = edgeitem;

            // to change the edge weight
            let edgestyle = { ...edgeitem.style };
            edgestyle.strokeWidth = "10";
            edgeitem.style = edgestyle;
            copyGraph[edgeIndex] = edgeitem;



            // to animate the node whose weight is being explored
            let nodeitem = { ...copyGraph[nodeIndex] };
            let nodestyle = { ...nodeitem.style };
            nodestyle.background = "green"; // nodeWeightUpdateColor
            nodeitem.style = nodestyle;

            // to change the node label
            let nodedata = { ...nodeitem.data };
            nodedata.label = new_node_label;
            nodeitem.data = nodedata;

            // to copy the these changes into the graph
            copyGraph[nodeIndex] = nodeitem;

            // updating the graph
            this.setState({ graph: copyGraph, codeStep : 2 });
        }, this.state.speed * time_counter);

        this.listOfTimeouts.push(timeoutID)
    }

    // to remove the neigbor animation
    removeNeighborAnimation(nodeIndex, edgeIndex, time_counter, step) {
        var timeoutID = setTimeout(() => {
            if (this.resetPressed) {
                return;
            }

            //this.pauseProgram() // to pause the program

            let copyGraph = [...this.state.graph];

            // to revert the edge animation back to normal
            let edgeitem = { ...copyGraph[edgeIndex] };
            let edgeanimated = { ...edgeitem.animated };
            edgeanimated = false;
            edgeitem.animated = edgeanimated;
            copyGraph[edgeIndex] = edgeitem;

            // to rever the edge style back to normal
            let edgestyle = { ...edgeitem.style };
            edgestyle.strokeWidth = "2"; // to change the edge back to normal
            edgeitem.style = edgestyle;
            copyGraph[edgeIndex] = edgeitem;

            // to rever the node color back tpo the initial color
            let nodeitem = { ...copyGraph[nodeIndex] };
            let nodestyle = { ...nodeitem.style };
            nodestyle.background = "gray"; // nodeWeightUpdateColor
            nodeitem.style = nodestyle;

            // to copy the these changes into the graph
            copyGraph[nodeIndex] = nodeitem;

            // updating the graph
            this.setState({ graph: copyGraph });

            //this.state.lastExecutedStep = step
            this.setState({ lastExecutedStep: step })

        }, this.state.speed * time_counter);

        this.listOfTimeouts.push(timeoutID)
    }


    getEdgeFromParentAnimation(edgeIndex, time_counter) {
        //console.log("In edge" + " " + this.state.speed * time_counter + " " + thislist of intervals)
        var timeoutID = setTimeout(() => {
            
            if (this.resetPressed) {
                return;
            }
            
            

            //this.pauseProgram() // to pause the program

            let copyGraph = [...this.state.graph];

            // to animate the edge between parent and child
            let edgeitem = { ...copyGraph[edgeIndex] };
            let edgeanimated = { ...edgeitem.animated };
            edgeanimated = true;
            edgeitem.animated = edgeanimated;
            copyGraph[edgeIndex] = edgeitem;

            // to change the stroke of edge between parent and child
            let edgestyle = { ...edgeitem.style };
            edgestyle.strokeWidth = "10"; // to change the edge back to normal
            edgeitem.style = edgestyle;
            copyGraph[edgeIndex] = edgeitem;

            edgestyle.stroke = "#FF57E7"; // to change the edge back to normal
            edgeitem.style = edgestyle;
            copyGraph[edgeIndex] = edgeitem;

            // updating the graph
            this.setState({ graph: copyGraph, codeStep : 1 });
        }, this.state.speed * time_counter);

        // to add timeoutId
        this.listOfTimeouts.push(timeoutID)
    }


    // the step is passed to help the program run through that line of code
    getNodeExplorationAndWeightUpdateAnimation(step, time_counter) {
        if (this.state.resetPressed) {
            return;
        }
        
        let main_exploration = this.animations_info.main_exploration;

        let info = main_exploration[step]



        //this.pauseProgram() // to pause the program


        let node_explored = info.node;
        let neighbors_update = info.neigbor_update;
        let node_index = parseInt(node_explored) - 1;

        let parent_node_info = this.animations_info.parent.get(node_explored)
        if (typeof (parent_node_info) != 'undefined') {
            let edgeIndex = parent_node_info.edgeFromParent.edgeIndex;

   
            this.getEdgeFromParentAnimation(edgeIndex, time_counter)
            
            // to move the time counter ahead
            time_counter += 1;

            // TODO : should do this inside the set timeout for every method
            //this.state.play_timer_counter = time_counter
            this.setState({ play_timer_counter: time_counter })
        }


        this.animateOneExploredNodes(node_index, time_counter);


        time_counter += 1;

        // TODO : should do this inside the set timeout for every method
        //this.state.play_timer_counter = time_counter
        this.setState({ play_timer_counter: time_counter })


        for (let info2 of neighbors_update) {

            //this.pauseProgram() // to pause the program

            let neighbor_node = info2.weightChangeNode;
            let neighbor_weight = info2.weightChangeValue;
            let edgeID = info2.edgeID;
            let edgeIndex = info2.edgeIndex;
            let new_node_label = info2.new_node_label;
            this.getNeigborAnimation(neighbor_node - 1, neighbor_weight, edgeID, edgeIndex, new_node_label, time_counter); // in the method also pass this.state.time_counter
            time_counter++

            this.removeNeighborAnimation(neighbor_node - 1, edgeIndex, time_counter, step); // in the method also pass this.state.time_counter
            time_counter++

            // TODO :  should do this inside the set timeout for every method
            //this.state.play_timer_counter = time_counter // to make synchronous with play
            this.setState({ play_timer_counter: time_counter })
        }
    }

    play = () => {
        this.resetPressed = false; // this means that the reset button is not being pressed again
        this.pausePressed = false; // this means that the pause button is not being pressed again


        if (this.state.step === -1) {
            this.simulatestep(0) // to do the initial step of initializing node weights
        }

        //this.state.play_timer_counter = 0 // whenever play button is pressed set this.state.play_timer_counter = 0 so that it doesn't take more time than usual
        this.setState({ play_timer_counter: 0 })

        // to do the animations where distances of nodes are being updated
        for (let i = this.state.step; i < this.animations_info.main_exploration.length; i++) {
            let timeoutID = setTimeout(() => {
                this.simulatestep(this.state.play_timer_counter)
            }, 1000)
            this.listOfTimeouts.push(timeoutID)

        }
    }

    // This is to reset the the visualizer
    reset = () => {
        this.pausePressed = false;

        this.resetPressed = true; // this is because resetButton was pressed

        import("./CustomGraph").then((module) => {

            // remeber it is important to clear the intervals that were not used
            for (let intervals of this.listOfTimeouts) {
                clearTimeout(intervals)
            }
            this.listOfTimeouts = [] // since no more timeouts the list should be fine




            this.setState({
                numberNodes: this.initialNumberNodes,
                graph: module.default.slice(),
                speed: this.visualizationSpeed,
                time_counter: this.initialTimeCounter,
                step: this.startingStepNumber,
                play_timer_counter: 0,
                codeStep : -1
            });
        });
    }

    // we need the time counter to tell the step() method at which time should we do the animation 
    simulatestep(time_counter) {
        this.resetPressed = false; // The pressing of step button means that the reset isn't pressed hence we set the value of resetPressed = false

        //this.state.play_timer_counter = 0 // so that it doesn't take more time in the next step
        this.setState({ play_timer_counter: time_counter })

        this.pausePressed = false;

        if (this.state.step === -1) {
            this.getInitialDistanceAnimation(); // to do animation for initial distance
            //this.state.step++;
            this.setState({step: this.state.step + 1})
        } else if (this.state.step < this.animations_info.main_exploration.length) {
            
            
            this.getNodeExplorationAndWeightUpdateAnimation(this.state.step, time_counter);
            //this.state.step++;
            this.setState({ step: this.state.step + 1 })
            return;
        } else {
            //this.reset()
            //this.state.step =-1
            this.setState({ step: -1 })
            return;
        }
        //this.setState({step: this.state.step + 1})

    }
    step = () => {
        this.simulatestep(0)
    }

    // to pause the animation
    pause() {

        this.pausePressed = true;
        // remeber it is important to clear the intervals that were not used
        for (let intervals of this.listOfTimeouts) {
            clearTimeout(intervals)
        }
        
        //this.state.step = this.state.lastExecutedStep + 1
        this.setState({ step: this.state.lastExecutedStep + 1 })
        this.listOfTimeouts = [] 
        // since no more timeouts the list should be fine
        // to make the code run in an endless loop
    }
    // to pause the animation
    resume() {
        this.pausePressed = false;
    }

    getVertices() {
        let vertices = new Map();
        for (let i = 0; i < this.state.numberNodes; i++) {
            let nodeID = this.state.graph[i].id;
            vertices.set(nodeID, NodeObject(nodeID));
        }
        return vertices;
    }

    getEdges() {
        let edges = new Map();
        for (let i = this.state.numberNodes; i < this.state.graph.length; i++) {
            let e = this.state.graph[i];
            let fromNode = e.source;
            let startNode = e.target;
            let weight = parseInt(e.label); // weights are integer
            let edgeID = e.id;
            let edgeIndex = i;
            if (!edges.has(fromNode)) {
                edges.set(fromNode, []);
            }
            edges.get(fromNode).push(Edges(fromNode, startNode, weight, edgeID, edgeIndex));
        }
        return edges;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div style={{ height: '70vh' }}>
                            <ReactFlow elements={this.state.graph} />
                        </div>
                    </Col>
                    <Col>
                      <div style={{width:'40%'}}>
                        <VizDisjktraCode step={this.state.codeStep}/>
                      </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
// to represent a node object
const NodeObject = (id) => {
    return {
        id: id,
        distance: Infinity,
        isVisited: false,
        previousVisitedNode: null,
        pathTillNow: null,
        isStart: false,
        isEnd: false,
    };
};

const Edges = (from, to, weight, id, edgeIndex) => {
    return {
        from: from,
        to: to,
        weight: weight,
        id: id,
        edgeIndex: edgeIndex,
    };
};
export default VizDijsktra;