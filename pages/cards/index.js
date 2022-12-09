import { Meta } from "../../app/utils/Meta";
import CardItem from "../../app/cards/CardItem";

export default function Home({cards}) {
  return ( // список карт
    <main>
      <div className="flex flex-col items-center justify-center">
        {cards.map(card => <CardItem key={card.id} card={card}/>)}
      </div>
    </main>    
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cards/');
  const cards = await res.json();

  return {
    props: {
      cards
    },
    revalidate: 10
  }
}