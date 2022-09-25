//function takes an array of numbers and a number as args. returns the number of even numbers from array, as specified by number arg.
function evenNumbers(array, number) {
    let newArr = []
    array.filter(x=> {
      if (x % 2 === 0) {
        newArr.push(x)
      }
    })
    return newArr.splice(-number)
  }


console.log(evenNumbers([2,4,6], 2)) // => [4,6]
console.log(evenNumbers([1,3,5,6,8,11,12,25,26,28], 3)) // => [12, 26, 28]
console.log(evenNumbers([11,12,5], 2)) // => 4