var katzDeliLine = [];

function takeANumber(currentLine, name){
  var array = [];
  for(var i = 0; i < name.length; i++){
      array.push('Welcome, ' + name[i]. + 'You are number ' + currentLine[i] + ' in line.');
  }
  return array;
}
