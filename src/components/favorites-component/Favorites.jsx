import { useDispatch, useSelector } from "react-redux";
import Cards from "../card-component/Cards";
import { filterCards, orderCards } from "../../redux/action";
import { FavoriteContainer, FavoriteSelect, FavoriteTitle } from "./StylesFavorites";

export default function Favorites() {

  
  const myFavorites = useSelector((state)=>state.myFavorites)
  

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <FavoriteTitle>My Favorites</FavoriteTitle>
      <FavoriteContainer>
        <FavoriteSelect 
        name="Orders"
        onChange={handleOrder}
        >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </FavoriteSelect>
        <FavoriteSelect 
        name="Filters"
        onChange={handleFilter}
        >
          <option defaultValue="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </FavoriteSelect>
        {
          myFavorites&&
          <Cards characters={myFavorites}></Cards>
          
        }
      </FavoriteContainer>
    </>
  );
}


