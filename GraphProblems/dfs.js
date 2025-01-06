import { Graph } from './bfs.js';

function depthFirstSearch(graph, startVertex) {
    const visited = new Set();
    const result = [];

    function dfsHelper(vertex) {
        visited.add(vertex);
        result.push(vertex);

        // Get neighbors from the adjacencyList directly
        const neighbors = graph.adjacencyList[vertex] || [];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                dfsHelper(neighbor);
            }
        }
    }

    dfsHelper(startVertex);
    return result;
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

const dfsResult = depthFirstSearch(graph, 1);
console.log(dfsResult); 

