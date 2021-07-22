// https://www.codewars.com/kata/find-the-stray-number
// 7 kyu. Find the stray number

function stray(numbers) {
    let strayNum = numbers[0];
    
    if (strayNum !== numbers[1] && strayNum !== numbers[2]) return strayNum;
    
    for (let i = 1; i < numbers.length; i++){
      if (strayNum !== numbers[i]) return numbers[i];
    }
}

/*
Codewars solutions:

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

const stray = nums => nums.reduce((a, b) => a ^ b);

function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}

function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}

const stray = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0]

const stray = arr => ~~arr.filter(x=>arr.indexOf(x)===arr.lastIndexOf(x)).join('')

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));


*/