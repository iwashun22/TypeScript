export function addAndCallback(
   n1: number,
   n2: number,
   cb: (num: number) => void
){
   const result = n1 + n2;
   cb(result);
}

// addAndCallback(11, 20, (result) => {
//    console.log(result);
// })

//////////////

type ThreeParam = (
   one: number, 
   two: number, 
   three: (result: number) => void
) => void

export const subtractAndCallback: ThreeParam = (n1, n2, cb) => {
   const result = n1 - n2;
   cb(result);
}

// subtractAndCallback(10, 2.4, (result) => {
//    console.log(result);
// })

export const multiplyAndCallback: ThreeParam = (n1, n2, cb) => {
   const result = n1 * n2;
   cb(result);
}

export const devideAndCallback: ThreeParam = (n1, n2, cb) => {
   const result = n1 / n2;
   cb(result);
}

// module.exports = {
//    addAndCallback,
//    subtractAndCallback,
//    multiplyAndCallback,
//    devideAndCallback,
// }