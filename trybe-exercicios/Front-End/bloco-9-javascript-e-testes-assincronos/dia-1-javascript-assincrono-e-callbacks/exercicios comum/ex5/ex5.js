const userFullName = ({ firstName, lastName }) => `Hello!!! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian'
  };
};
console.log(getUser());
console.log(getUser());
