function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeliLine){
  if(nowServing < 1){
    return `There is nobody waiting to be served!`;
  } else{
    return ('Currently serving ' + name + ' .');
  }
}
