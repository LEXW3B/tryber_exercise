const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'thurday', 'Friday'],
  weekend: ['Saturday', 'Sunday'], 
};
const { workDays, weekend } = daysOfWeek;
console.log(workDays);
console.log(weekend);
console.log([{...workDays, ...weekend}]);

