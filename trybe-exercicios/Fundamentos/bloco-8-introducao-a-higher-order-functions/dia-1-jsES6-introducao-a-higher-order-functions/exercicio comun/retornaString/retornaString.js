const retorneString = () => 'Acordado!!';
const outraString   = () => 'Bora tomar café!!';
const maisString   = () => 'Partiu dormir!!';

const doingThings = (func) => func() ;

console.log(doingThings(outraString));
