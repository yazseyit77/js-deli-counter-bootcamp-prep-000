function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  for(var i = 0; i < katzDeliLine.length; i++){
  }
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(line){
  for(var i = 0; i < line.length; i++){
  }
  if(line.length === 0){
    return "The line is currently empty!";
  } else{
    return (`The line is currently: ${line.shift()}.`);
  }
}
