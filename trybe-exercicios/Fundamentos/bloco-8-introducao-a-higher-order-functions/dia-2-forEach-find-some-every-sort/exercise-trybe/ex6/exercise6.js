const expectedResult = true;
function someBookWasReleaseOnThe80s() {
  return someBookWasReleaseOnThe80s.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};