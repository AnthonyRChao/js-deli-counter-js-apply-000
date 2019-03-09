function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  return katzDeliLine.pop(0);
}

function currentLine() {
  return null
}
