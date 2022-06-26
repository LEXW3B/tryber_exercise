const searchEmployee = (id, detail) => {
  let employee = '';

  for (let index = 0; index < professionalBoard.length; index += 1) {
    const currentEmployee = professionalBoard[index];

    if (currentEmployee.id === id) {
      employee = currentEmployee;
    }
  }

  if (!employee) {
    throw new Error("ID não identificada");
  }

  if (!employee[detail]) {
    throw new Error("Informação indisponível");
  }

  return employee[detail];
};

module.exports = searchEmployee;