import CardItem from "../../app/cards/CardItem";
import { Meta } from "../../app/utils/Meta";

function Card({card}) {
  return ( // отдельная страница для каждой карточки
    <div className="flex flex-col items-center justify-center">
      <Meta title="Card Info"/>
      <CardItem card={card}/>
    </div>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/cards/');
  const data = await res.json();

  const paths = data.map(card => {
    return {
      params: { id: card.id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const res = await fetch(`http://localhost:3000/api/cards/${params.id}`);
  const card = await res.json();

  return {
    props: {
      card
    },
    revalidate: 10
  }
}

export default Card;