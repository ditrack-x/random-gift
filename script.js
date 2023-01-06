const names = ['Tadeo', 'Ayrton', 'Leslie', 'Uriel', 'Victor', 'Ariel', 'Ramon']
let conta = 0;

function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length
  
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random())
      const randomItem = newArray.splice(randomPosition, 1)
  
      newArray.push(...randomItem)
    }
  
    return newArray
}

const randomNames = shuffle(names);
randomNames.map(name, index)

// Match each person with the next one, folding over at the end
const matches = randomNames.map((name, index) => {
  return {
    santa: name,
    receiver: randomNames[index + 1] || randomNames[0],
  }
});



console.log(names);
console.log(randomNames);