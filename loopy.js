/*for (var i = 100; i < 201; i = i + 1) {

  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  } 
  else if (i % 4 === 0) {
    console.log('Lighthouse');
  } 
  else if (i % 3 === 0) {
    console.log('Loopy');
  } else { 
    console.log(i);
  }

} */

const amounts = [61.00, 52.25, 112.99, 5.00]; 

const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);
