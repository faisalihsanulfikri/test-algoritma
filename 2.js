function reverseCharString(stringData) {
  return stringData ? reverseCharString(stringData.substr(1)) + stringData[0] : stringData;
}

reverseCharString('Faisal Ihsanul Fikri');

