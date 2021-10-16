
let mapAndReduce = (array2r, array3r) => {
  let reducedA = array2r.map(e => e**2).reduce((a,b)=> a+b)
   let reducedB = array3r.map(e => e*e*e).reduce((a,b)=> a+b)

   return reducedA > reducedB

}

mapAndReduce([1,2,3,4,5], [1,2,3,4,5])


function sumArrays(a,b) {
  return a.reduce((a,c) => a + c**2, 0) > b.reduce((a,c) => a + c**3,0)
}

console.log(sumArrays([1,2,3],[1,2]))


