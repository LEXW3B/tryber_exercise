const expectedResult = false;
function authorUnique() {
  return books.every((book) => !books.some((booksome) => (booksome.author.birthYear === book.author.birthYear) && (booksome.author.name !== book.author.name)));
};
