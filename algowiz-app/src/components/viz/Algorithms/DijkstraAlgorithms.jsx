export function DijkstraAnimations(vertices, edges, start, end) {
    let d = new Map()
    // inititalizing each node distance to each node to 0
    for (let v of vertices.keys()) {
        d.set(v, Number.POSITIVE_INFINITY)
    }
    d.set(start, 0)
    let getInitialInfo = getInititalDistance(d, vertices)


    let explored_nodes = new Set()
    explored_nodes.add(start)

    let queue = []
    for (let v of vertices.keys()) {
        queue.push([v, d.get(v)])
    }
    queue.sort(function (a, b) { return a[1] - b[1] })
    let parent = new Map()

    let nodes_exploration_order = []
    let main_exploration = []

    while (queue.length > 0) {
        //console.log(queue, queue.length, queue[0])
        let node_u = queue.shift() // to remove the first element
        let u = node_u[0]
        nodes_exploration_order.push(u) // order in which he nodes are explored
        explored_nodes.add(u) // the set of explored nodes


        let edges_u = edges.get(u)
        let neigbor_update = []
        for (let e of edges_u) {
            let v = e.to
            let cost_e = parseInt(e.weight)
            //console.log(v, cost_e, d.get(v))
            if (!explored_nodes.has(v) && d.get(u) + cost_e < d.get(v)) {
                d.set(v, d.get(u) + cost_e)
                
                let node_weight_update = {
                    from: e.from, // the u node
                    to: e.to, // the v node
                    weightChangeNode: e.to, // node whose weight was changed
                    weightChangeValue: d.get(u) + cost_e,
                    edgeID: e.id,
                    edgeIndex: e.edgeIndex,
                    new_node_label: getUpdatedLabelWithWeight(v, d)
                }
                parent.set(v, {parent :u, edgeFromParent: node_weight_update})

                neigbor_update.push(node_weight_update)
            }
        }
        // Storing the node being explored right now
        main_exploration.push({
            node: u,
            neigbor_update: neigbor_update
        })

        let new_queue = []
        for (let node of queue) {
            new_queue.push([node[0], d.get(node[0])])
        }
        queue = new_queue
        queue.sort(function (a, b) { return a[1] - b[1] })
        //console.log(queue)
    }
    return {
        getInitialDistance: getInitialInfo,
        distance: d,
        nodes_exploration_order: nodes_exploration_order,
        main_exploration: main_exploration,
        parent: parent
    };
    // Get the first animation
}


// to get the initial weight
function getInititalDistance(distance, vertices) {
    let info = []
   
    for (let v of vertices.keys()) {
        let nodeLabel = ""
        let m = {}
        if (v === '1') {
            nodeLabel = 'S(' + distance.get(v) + ')'
            m = {
                label: (
                    <>
                        <h3> {nodeLabel} </h3>
                    </>
                )
            }
        } else {
            nodeLabel = String.fromCharCode(("A".charCodeAt(0) + parseInt(v) - 2))
            m = {
                label: (
                    <>
                        <h3> {nodeLabel}(&infin;) </h3>
                    </>
                )
            }
        }
        
        info.push(m)
        
    }
    return info
}


// to update the label of a node whose distance has just been updated
function getUpdatedLabelWithWeight(v, distance) {
    let nodeLabel = ""
    let new_label_with_weight = ''
    if (v === '1') {
        nodeLabel = 'S(' + distance.get(v) + ')'
        new_label_with_weight = (
            <>
                <h3> {nodeLabel} </h3>
            </>
        );

    } else {
        nodeLabel = String.fromCharCode(("A".charCodeAt(0) + parseInt(v) - 2)) + '(' + distance.get(v) + ')'

        new_label_with_weight = (
            <>
                <h3> {nodeLabel} </h3>
            </>
        );
    }
    return new_label_with_weight
}
