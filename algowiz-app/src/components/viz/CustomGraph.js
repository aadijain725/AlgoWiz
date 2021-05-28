import React from "react";



let Nodestyle = {
  background: "gray",
  color: "#333",
  border: "1px solid #222138",
  width: 80,
  height: 80,
  borderRadius: 40
};

let EdgeStyle = {
  stroke: '#7FDBFF', strokeWidth: "2",
}

let EdgeLabelStyle = {
  'fontSize': "20px"
}

let EdgeLabelBgStyle = {
  fill: '#FFCC00', color: '#fff', fillOpacity: 1
}

let is_animated_edge = false

let arr = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <>
          <h3> S </h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 10, y: 0 },
  },
  {
    id: "2",
    type: "input",
    data: {
      label: (
        <>
          <h3> A</h3>
        </>
      ),
    },
    position: { x: 30, y: 180 },
    style: Nodestyle,
  },

  {
    id: "3",
    type: "input",
    data: {
      label: (
        <>
          <h3> B</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 300, y: 0 },
  },

  {
    id: "4",
    type: "input",
    data: {
      label: (
        <>
          <h3> C</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 40, y: 400 },
  },

  {
    id: "5",
    type: "input",
    data: {
      label: (
        <>
          <h3> D</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 290, y: 240 },
  },

  {
    id: "6",
    type: "input",
    data: {
      label: (
        <>
          <h3> E</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 500, y: 100 },
  },

  {
    id: "7",
    type: "input",
    data: {
      label: (
        <>
          <h3> F</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 400, y: 300 },
  },

  {
    id: "8",
    type: "input",
    data: {
      label: (
        <>
          <h3> G</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 300, y: 500 },
  },

  {
    id: "9",
    type: "input",
    data: {
      label: (
        <>
          <h3> H</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 600, y: 400 },
  },

  {
    id: "10",
    type: "input",
    data: {
      label: (
        <>
          <h3> I</h3>
        </>
      ),
    },
    style: Nodestyle,
    position: { x: 700, y: 10 },
  },

  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "2", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
    label: "12", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },


  {
    id: "e2-4",
    source: "2",
    target: "4",
    label: "5", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },
  {
    id: "e2-6",
    source: "2",
    target: "6",
    label: "1", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    label: "1", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e3-6",
    source: "3",
    target: "6",
    label: "4", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },


  {
    id: "e5-8",
    source: "5",
    target: "8",
    label: "3", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e4-8",
    source: "4",
    target: "8",
    label: "4", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },


  {
    id: "e8-9",
    source: "8",
    target: "9",
    label: "5", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e4-7",
    source: "4",
    target: "7",
    label: "1", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e6-9",
    source: "6",
    target: "9",
    label: "2", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

  {
    id: "e9-10",
    source: "9",
    target: "10",
    label: "6", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },
  {
    id: "e7-10",
    source: "7",
    target: "10",
    label: "2", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },
  {
    id: "e10-3",
    source: "10",
    target: "3",
    label: "2", // weight
    type: 'straight',
    arrowHeadType: "arrowclosed",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: EdgeLabelBgStyle,
    labelStyle: EdgeLabelStyle,
    style: EdgeStyle,
    animated: is_animated_edge
  },

];

export default arr