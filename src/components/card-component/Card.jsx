import { useState } from "react";
import {
   CardStyle,
   CardInfo,
   CardClose,
   CardAvatar,
   CardIconFavorite,
   ButtonsContainer,
} from "./StylesCards";
import { NavLink, useLocation } from "react-router-dom";
import portal from "../../img/portal.png";
import { connect } from "react-redux";
import { addFavorites, deleteFavorite } from "../../redux/action";
import { useEffect } from "react";
import unse from "../../img/unSelected.png";
import sele from "../../img/selected.png";

export function Card(props) {
   const { name, status, species, gender, origin, image, onClose, id } = props;

   const [isHovered, setIsHovered] = useState(false);
   const [isFav, setIsFav] = useState(false);
   const location = useLocation();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.deleteFavorite(id);
      } else {
         setIsFav(true);
         props.addFavorites({
            name,
            status,
            species,
            gender,
            origin,
            image,
            id,
         });
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, props.myFavorites]);

   return (
      <CardStyle
         onMouseOver={() => { }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <ButtonsContainer>
            {isFav ? (
               <CardIconFavorite onClick={handleFavorite}>
                  <img src={sele} alt="icons" />
               </CardIconFavorite>
            ) : (
               <CardIconFavorite onClick={handleFavorite}>
                  <img src={unse} alt="icon" />
               </CardIconFavorite>
            )}
         </ButtonsContainer>
         <CardInfo>{name}</CardInfo>
         
         <NavLink to={`/detail/${id}`}>
            <CardAvatar src={image} alt="avatar of character" />
         </NavLink>
         {isHovered && location.pathname !== "/favorite" && (
            <CardClose onClick={() => onClose(id)}>
               <img src={portal} alt="icon" />
            </CardClose>
         )}
      </CardStyle>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorites: (character) => dispatch(addFavorites(character)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id)),
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);