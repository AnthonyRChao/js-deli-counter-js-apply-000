function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    // The line is currently: 1. Ada, 2. Grace
    let res = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      let str = i + ". " + katzDeliLine[i] +  ", "
      res.concat(str)
    }
  }
  return res;
}
