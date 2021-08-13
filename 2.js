function reverseCharString(binaries) {
  return str ? reverseCharString(str.substr(1)) + str[0] : str;
}

reverseCharString('Faisal Ihsanul Fikri');

