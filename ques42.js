import { findDistance } from "./ques41.js"

const areCirclesInterssecting = (x1,y1,r1,x2,y2,r2) => {
    return findDistance(x1,y1,x2,y2) <= r1+r2
}

console.log(areCirclesInterssecting(1,2,3,4,5,6)) 