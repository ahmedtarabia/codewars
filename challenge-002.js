function countSheeps(arrayOfSheep) {
  let present = 0
  let absent = 0
  for (i = 0; i < arrayOfSheep.length ; i++){
    if(arrayOfSheep[i] === true) {
      present += 1
    }else if(arrayOfSheep[i] === false){
      absent += 1
    }
    console.log(present)
  }
  console.log(present)
}

var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];
  
countSheeps(array1)