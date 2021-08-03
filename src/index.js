module.exports = function check(str, bracketsConfig) {
  let hash_conf = {};
  for (let i in bracketsConfig) {
    hash_conf[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  return delete_pair(str, hash_conf).trim().length<1;
};

const delete_pair = (str, hash_conf) => {
  let arr = str.split('');
  let yes = false;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] == hash_conf[arr[j - 1]]) {
      arr = arr.slice(0, j - 1).concat(arr.slice(j + 1));
      j--;
      yes = true;
    }
  }
  let tail = arr.join('');
  return (yes) ? delete_pair(tail,hash_conf) : tail;
}
