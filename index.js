// add solution here
function theBeatlesPlay(musicians, instruments) {
  var sentences = [] 
  for (i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return sentences
}