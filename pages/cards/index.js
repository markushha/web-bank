import { Meta } from "../../app/utils/Meta";
import CardItem from "../../app/cards/CardItem";
import Navbar from "../../app/components/Navbar";

export default function Home({cards}) {
  return ( // список карт
    <div>
      <Navbar></Navbar>
      <Meta title="Ваши карты"/>
      <main className="my-4">
        <div className="flex flex-col items-center justify-center">
          {cards.map(card => <CardItem key={card.id} card={card}/>)}
        </div>
      </main>
    </div>
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