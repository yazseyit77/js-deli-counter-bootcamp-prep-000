function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli){
  if(katzDeli.length; < 1){
    return "There is nobody waiting to be served!";
  } else{
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}
