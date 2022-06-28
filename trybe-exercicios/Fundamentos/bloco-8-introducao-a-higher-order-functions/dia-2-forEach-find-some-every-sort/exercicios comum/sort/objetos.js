const gamers = [
  {
    name: 'Eduardo',
    points: [20,22,100,10,0]
  },
  {
    name: 'Ana',
    points: [0,20,10,100,100]
  },
  {
    name: 'Bob',
    points: [0,100,10,10,5,20]
  },
  {
    name: 'Carlo',
    points: [3,20,10,10,10]
  }
];

//gamers.sort((a, b) => a.name > b.name ? 1 : -1);
//gamers.sort((a, b) => a.points > b.points ? 1 : -1);

gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((element) => pointsA += element);
  b.points.forEach((element) => pointsB += element);
  return pointsA - pointsB;
});
console.log(gamers);

console.log(gamers);
