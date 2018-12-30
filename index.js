// add solution here
function theBeatlesPlay (musiciansArr, instrumentsArr) {
  var emptyArr = []
  for (let i=0; i<musiciansArr.length; i++) {
    // let musician = musiciansArr[i]
    // for (let j=0; j<instrumentsArr.length; j++)
    // let instrument = instrumentsArr[j]
    emptyArr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}.`)
  }
  return emptyArr
}