const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  return this.films.map(film => film.title)
};

Cinema.prototype.findByTitle = function(title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.filterByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.checkFilmByYear = function(year) {
  return this.films.some(film => film.year === year);
};

Cinema.prototype.checkAllFilmsLongerThan = function(length) {
  return this.films.every(film => film.length > length);
};

// Cinema.prototype.totalFilmsRuntime = function() {
//   return this.films.reduce((accumulator, film) => accumulator + film.length, 0);
// };

Cinema.prototype.totalFilmsRuntime = function() {
  return this.films.reduce(function(accumulator, film) {
    return accumulator + film.length;
  }, 0);
};

Cinema.prototype.filterFilmsByYear = function(year) {
  return this.films.filter(film => film.year === year);
};

Cinema.prototype.filmsByProperty = function(property, value) {
  return this.films.filter(film => eval('film.'+(property)) === value)
};

module.exports = Cinema;
