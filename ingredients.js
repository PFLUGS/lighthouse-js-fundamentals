
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for  ( let index = 0; index < ingredients.length; index++){
  console.log(ingredients[index]);
}


for  (let items = ingredients.length-1; items >= 0; items--){
  console.log(ingredients[items]);
}
