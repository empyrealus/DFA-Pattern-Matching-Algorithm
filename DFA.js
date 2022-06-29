<!DOCTYPE html>
<html>
    <p>Regex: (AA+TT)(AA+TT)*<br>You should be able to find a needle match in the haystack DAFASDAATTAADFNF, a 'valid' return will let you know that the pattern that matches the regex was located in the string.</p>
        <label for="pattern1">Enter DNA sequence:<br><span id='validation'></span></label></br>
        <input type='text' id='textIt' placeholder="Ex:AATTAA"/></br></br>
        <button type='submit' onclick="setObjParam();">Check my Pattern</button>
    <script>
// var for external data
var p1s;
function setObjParam(){
  p1s = document.getElementById("textIt").value,
  myObject = {pattern1:p1s};
  DFA(myObject);
}
function DFA (myObject)
{
  // let  for internal scope
  let state = '0'; // S = Start
  // get the value of each pattern in the object
  Object.values(myObject).forEach(pattern =>{ 
      // this pattern should never be odd in this case, so auto reject odd string, remove this check for larger bodies of random text.
      if(pattern.length % 2 != 0){console.log(pattern+" is an invalid string");}
      // catch edge cases
      else if(pattern.length == 0 || pattern.length == null || pattern.length == NaN){console.log(pattern+" is an invalid string");}
      else{
          for(let i=0;i<pattern.length;i++){
              if(state === '0'){
                  let block = pattern[i]+pattern[i+1];//block prototype (2), the 'block' can be any pattern format needed for checking relevant chunks of some type.
                  switch(block)
                  {
                      case "AA":state = "1";continue;
                      case "TT":state = "1";continue;
                      //why don't we 'break'? breaking will send the data through the entire machine unnecessarily, wasting resource because 'break' only breaks the switch and does not break the current iteration; we should use continue for non-iterable mandatory patterns that exist at the beginning of a pattern, when state 1 is a final state; insinutating that we do not need to pass s0:s1 to s(n), this will allow us to reject faulty strings that begin with faulty types. According to the Regex AA+TT MUST be present at the beginning, any other string would be default fail, unless we wanted to search strings like xyz(AA+TT)yxz**
                      default: state = '0';
                  }
              }
              if(state === '1'){
                   let blockChunk = i % 2 != 0 ? i+1 : i,
                   block = pattern[blockChunk]+pattern[blockChunk+1];//block prototype (2), the 'block' can be any pattern format needed for checking relevant chunks of some type.
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
