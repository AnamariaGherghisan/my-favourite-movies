import { Banner } from "./components/Banner";
import { MovieCard } from "./components/MovieCard";
import { Movies } from "./components/Movies";
//import { FeaturedMovie } from "./components/FeaturedMovie";
//import { FeaturedMovies } from "./components/FeaturedMovies";
//import { FeaturedMoviesCarousel } from "./components/FeaturedMoviesCarousel";
//import { FeaturedMoviesSlider } from "./components/FeaturedMoviesSlider";
//import { FeaturedMoviesSlider2 } from "./components/FeaturedMoviesSlider2";
//import { FeaturedMoviesSlider3 } from "./components/FeaturedMoviesSlider3";
import "./index.css";

const movies = [
  {imageUrl:" https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", title:"Movie 1",},
  {imageUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pqiRuETmuSybfnVZ7qyeoXhQyN1.jpg", title:"Movie 2",},
  {imageUrl:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rejrD9ovTHJbfmpLM0mbEliEPV6.jpg", title:"Movie 3",},];
export const App = () => {
  return <div>
    <Banner></Banner>
    <Movies movies={movies}></Movies>
    </div>;  
};


