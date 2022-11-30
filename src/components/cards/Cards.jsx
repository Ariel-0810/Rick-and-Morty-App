import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={styles.container}>
      {characters.map((e) => ( 
         <Card
         key={e.id}
         id={e.id}
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => onClose(e.id) }
         />
      ))}
   </div>
   );
}
