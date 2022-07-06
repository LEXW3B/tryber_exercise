const userFullName = ({ firstName, lastName }) => `hello! my name is ${firstName} ${lastName}`;

const getUser = (param) => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian'
  }
  return param(userToReturn);
};
console.log(getUser(userFullName));;
