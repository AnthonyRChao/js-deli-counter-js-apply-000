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
  let res = "The line is currently: ";
  if (katzDeliLine.length > 0) {
    // The line is currently: 1. Ada, 2. Grace
    for (var i = 0; i < katzDeliLine.length; i++) {
      let str = i + 1 + ". " + katzDeliLine[i] +  ", ";
      res.concat(str);
    }
  } else {
    return "The line is currently empty.";
  }
  return res;
}
