import { Banner } from "./components/Banner";
import { MovieCard } from "./components/MovieCard";
import { Movies } from "./components/Movies";
const movies = [
  {imageUrl:"https://images.unsplash.com/photo-1685682160927-3597668ec05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1870&q=80", title:"Movie 1",},
  {imageUrl:"https://images.unsplash.com/photo-1685570788011-9a136a8582fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", title:"Movie 2",},
  {imageUrl:"https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title:"Movie 3",},];
export const App = () => {
  return <div>
    <Banner></Banner>
    <Movies movies={movies}></Movies>
    </div>;  
};


