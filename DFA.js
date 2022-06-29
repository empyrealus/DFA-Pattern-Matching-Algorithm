<!DOCTYPE html>
<html>
    <p>Regex: (AA+TT)(AA+TT)*<br>You should be able to find a needle match in the haystack DAFASDAATTAADFNF, a 'valid' return will let you know that the pattern that matches the regex was located in the string.</p>
        <label for="pattern1">Enter DNA sequence:<br><span id='validation'></span></label></br>
        <input type='text' id='textIt' placeholder="Ex:AATTAA"/></br></br>
        <button type='submit' onclick="setObjParam();">Check my Pattern</button>
<script>
var p1s;
function setObjParam(){
  p1s = document.getElementById("textIt").value,
  myObject = {pattern1:p1s};
  DFA(myObject);
}
function DFA (myObject)
{
  let state = '0';
  Object.values(myObject).forEach(pattern =>{ 
      if(pattern.length % 2 != 0){console.log(pattern+" is an invalid string");}
      else if(pattern.length == 0 || pattern.length == null || pattern.length == NaN){console.log(pattern+" is an invalid string");}
      else{
          for(let i=0;i<pattern.length;i++){
              if(state === '0'){
                  let block = pattern[i]+pattern[i+1];
                  switch(block)
                  {
                      case "AA":state = "1";continue;
                      case "TT":state = "1";continue;
                      default: state = '0';
                  }
              }
              if(state === '1'){
                   let blockChunk = i % 2 != 0 ? i+1 : i,
                   block = pattern[blockChunk]+pattern[blockChunk+1];
                   switch(block)
                  {
                      case "AA":state = "3";break;
                      case "TT":state = "2";break;
                      default: state = '0';
                  }
                  return state;
              }
              if(state === '2'){
                   let blockChunk = i % 2 != 0 ? i+1 : i,
                   block = pattern[blockChunk]+pattern[blockChunk+1];
                  switch(block)
                  {
                      case "AA":state = "1";console.log("state change"+state);break;
                      case "TT":state = "2";console.log("state change"+state);break;
                      default: state = '0';
                  }
                  return state;
              }
               if(state === '3'){
                   let blockChunk = i % 2 != 0 ? i+1 : i,
                   block = pattern[blockChunk]+pattern[blockChunk+1];
                  switch(block)
                  {
                      case "AA":state = "3";console.log("state change"+state);break;
                      case "TT":state = "1";console.log("state change"+state);break;
                      default: state = '0';
                  }
                  return state;
              }
          }
      }
  });
  testing(state);
  return state;
}
function testing(result){
    let output,validation = document.getElementById('validation');
    Number(result) >= 1 ? output = "The pattern "+p1s+" is valid" : output = "The pattern"+p1s+" is invalid";
    validation.innerHTML = output;
    return output;
}
    </script>
</html>
