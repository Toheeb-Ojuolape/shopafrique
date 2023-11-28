//check if any of the keys of an object is empty
export function isEmpty(object) {
  const empty  = Object.values(object).some((value) => value === "");

  if(empty){
    return true
  } else{
    return false
  }
}
