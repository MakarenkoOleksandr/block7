function moviesDB(DB, genre, movie) {
  const genreIdx = DB.findIndex((el) => el.genre === genre);

  if (genreIdx === -1) DB.push({ genre: genre, movies: [] });

  const existGenreIdx = DB.findIndex((item) => item.genre === genre);
  const movieIdx = DB[existGenreIdx].movies.findIndex(
    (el) => el.title === movie.title
  );

  if (movieIdx === -1) {
    DB[existGenreIdx].movies.push({ title: movie.title });
  } else {
    return `the movie ${movie.title} is already in the database!`;
  }

  return { genre: genre, title: movie.title };
}

module.exports = {
  moviesDB,
};
