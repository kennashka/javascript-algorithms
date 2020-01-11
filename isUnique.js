var str = "tesingg";

let isUnique = (str) =>{
  old = str.split("")
 ns = [...new Set(str)]
//return str2

if (ns.length != old.length){
  return false;
}
else {
  return true;
}
}
isUnique(str)
