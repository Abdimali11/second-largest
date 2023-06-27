// Good Luck 💪🏾
function secondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
        secondLargest = numbers[i];
      }
    }
  
    return secondLargest;
  }
console.log(secondLargest([23, 66, 50, 12, 6]));   
console.log(secondLargest([65, 34, 100, 22, 85])); 
console.log(secondLargest([67, 22, 19, 12, 80]));  