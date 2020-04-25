// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentences = [] 
  var i;
  for (i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return sentences
}

function johnLennonFacts(facts){
  var i 
  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++ 
  }
  return facts
}