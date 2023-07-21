import Card from './Card';
import { CardsStyles } from './StylesCards'



export default function Cards(props) {
   
   const {characters} = props;
   
   characters.onClose = ()=>{ window.alert('Emulamos que se cierra la card') }
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
