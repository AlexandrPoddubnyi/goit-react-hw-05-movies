import { useSearchParams } from "react-router-dom";
import { useState, useEffect, } from "react";
import { fetchBySearchMovies } from "components/API/API";
import  SearchBar  from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";


const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');
  const [movies, setMovies] = useState(null);
  
  // const movieName = searchparams.get("query") ?? "";


  // const updateQueryString = (name) => {
  //   const nestParams = name !== "" ? { name } : {};
  //   setSearchparams(nestParams);
  // };


  const handleSubmit = inputValue => {
    if (inputValue === '') {
      return alert('Введіть дані для пошуку')
    }
    setSearch(inputValue)
  };


  useEffect(() => {
    if (search === '') {
      return
    }
    fetchBySearchMovies(search).then(data => {
      setMovies([...data])
    })
  }, [search]);
  console.log(movies)


  return (
    <main>
      <SearchBar onSubmit={handleSubmit}  />
      <MoviesList movies={movies} />
    </main>
  )
};

export default Movies