// add solution here

function theBeatlesPlay(musicians, instruments){
var placeholder = Array()
for(var i = 0; i < musicians.length; i++) {
  var musician = musicians[i]
  var instrument = instruments[i]
  placeholder.push(`${musicians} plays ${instruments}`)}
return placeholder
}

function johnLennonFacts(facts){
var i = 0 
while(i < facts.length)
{facts.splice(i, 1, facts[i] + "!!!")
i++
}
return facts}

function iLoveTheBeatles(number){
  var test2 = Array()
  var i = number
  do{
    test2.push("I love the Beatles!")
    i++
  } 
  while(
    i < 15)
return test2}


