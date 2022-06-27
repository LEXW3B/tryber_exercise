const repeat = (number, action) => {
  for (let i = 0; i <= number; i += 1) {
    action(i);
  }
};

repeat(13, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});