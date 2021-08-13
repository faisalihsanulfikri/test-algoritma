function brackerMatcher(brackers) {
  let arrayBrackers = brackers.split('');

  let arrarMatches = [];

  for (let i = 0; i < arrayBrackers.length/2; i++) {
    let bracketOpen = arrayBrackers[i];
    let bracketClosed = arrayBrackers[arrayBrackers.length - (i + 1)];

    let match = round([bracketOpen, bracketClosed]) || curly([bracketOpen, bracketClosed]) || square([bracketOpen, bracketClosed])
    arrarMatches.push(match)
  }

  let invalid = arrarMatches.includes(false);
  if (invalid) {
    return 'No';
  }
  return 'Yes';
}