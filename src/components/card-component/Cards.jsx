import Card from './Card';
import { CardsStyles } from './StylesCards'



export default function Cards(props) {
   
   const {characters} = props;
   
  
   return (
      
         <CardsStyles>
            {characters.map((element) => {
              return (

                  <Card
                  key={element.id} 
                  {...element}
                  
                  ></Card>
              )
            })}
         </CardsStyles>
      )
}
