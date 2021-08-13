function reverseCharString(binaries) {
  /** validation */
  if(!Array.isArray(binaries)) return 'invalid data';
  let totalInvalidValues = binaries.filter((binary) => ![0,1].includes(binary)).length;
  if (totalInvalidValues > 0) return 'invalid data';

  return str ? reverseCharString(str.substr(1)) + str[0] : str;
}

reverseCharString('Faisal Ihsanul Fikri');

