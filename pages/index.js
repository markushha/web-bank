import Image from "next/image";
import { Meta } from "../app/utils/Meta";

export default function Home({cards}) {
  console.log(cards);
  return (
    <div>
      <Meta title="Главная"/>
      <h1>Hello world!</h1>
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