function maximum(binaries) {
  /** validation */
  if(!Array.isArray(binaries)) return 'invalid data';
  let totalInvalidValues = binaries.filter((binary) => ![0,1].includes(binary)).length;
  if (totalInvalidValues > 0) return 'invalid data';

  let binaryStrings = binaries.join('');
  let binarySplites = binaryStrings.split('0');
  let maxBinary = binarySplites.sort()[(binarySplites.length) - 1];
  return parseInt(maxBinary, 2);
}