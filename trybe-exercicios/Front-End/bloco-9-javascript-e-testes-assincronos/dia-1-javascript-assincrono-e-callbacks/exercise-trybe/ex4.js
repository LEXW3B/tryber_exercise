const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const temp = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${temp}° Celsius`), messageDelay());
};

sendMarsTemperature();
