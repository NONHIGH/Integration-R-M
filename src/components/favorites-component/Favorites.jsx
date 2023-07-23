import { useDispatch, useSelector } from "react-redux";
import Cards from "../card-component/Cards";
import { filterCards, orderCards } from "../../redux/action";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Favorites() {

  
  const myFavorites = useSelector((state)=>state.myFavorites)
  console.log(myFavorites);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    console.log(event.target.value);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    dispatch(filterCards(event.target.value));
  };

  useEffect(()=>{
    console.log(myFavorites);
    console.log('cambio el myFavorites');
  },[myFavorites])

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
          myFavorites&&
          <Cards characters={myFavorites}>{console.log(myFavorites)}</Cards>
          
        }
      </div>
    </>
  );
}


