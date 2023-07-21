import { connect, useDispatch, useSelector } from "react-redux";
import Cards from "../card-component/Cards";
import { filterCards, orderCards } from "../../redux/action";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Favorites({ myFavorites }) {

  const [aux, setAux] = useState(false);
  
  const allCharacters = useSelector((state)=>state.allCharacters);
  const locacion = useLocation()
  useEffect(()=>{
    if(!myFavorites && locacion==='/favorite'){
      myFavorites = allCharacters
    }
  },[])
  

  const dispatch = useDispatch();



  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  };

  const handleFilter = (event) => {
    
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <h2>My Favorites</h2>
      <div>
        <select 
        name="Orders"
        onChange={handleOrder}
        >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select 
        name="Filters"
        onChange={handleFilter}
        >
          <option defaultValue="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        {
          myFavorites?
          <Cards characters={myFavorites}></Cards>
          :
          <Cards characters={allCharacters}></Cards>
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
