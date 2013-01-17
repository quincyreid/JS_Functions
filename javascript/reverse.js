function reverse(str){
  var result = "";
  for( var i = str.length-1; i >= 0; i--){
    result = result + str[i];
    console.log();
  }
  return result;
};

