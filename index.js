function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  for(var i = 0; i < katzDeli.length; i++){
  }
  if(katzDeli.length; < 1){
    return "There is nobody waiting to be served!";
  } else{
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}
