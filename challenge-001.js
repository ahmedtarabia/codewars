function isValidWalk(walk) {
  let ns = 0
  let we = 0
  for (let i=0;i<walk.length;i++){
    if(walk[i] === 'n'){
      ns += 1
    }else if(walk[i] === 's'){
      ns -= 1
    }else if(walk[i] === 'e'){
      we -= 1
    }else if(walk[i] === 'w'){
      we += 1
    }
  }
  
  if(walk.length === 10 && we === 0 && ns === 0){
    return true
  }
  else{
    return false
  }
}

//some test cases for you...
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])
isValidWalk(['w'])
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])