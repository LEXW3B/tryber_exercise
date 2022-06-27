const repeat = (number, action) => {
  for (let i = 0; i <= number; i += 1) {
    action(i);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven);
repeat(3, isOdd);