module.exports = function check(str, bracketsConfig) {
  let ss = str;
  for (i = 0; i < str.length / 2; i++) {
    for (a = 0; a < bracketsConfig.length; a++) {
      ss = ss.replace(bracketsConfig[a][0] + bracketsConfig[a][1], '');
    }
  } return ss.length === 0;
}
