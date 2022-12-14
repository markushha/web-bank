import Image from "next/image";
import { Meta } from "../app/utils/Meta";
import Navbar from "../app/components/Navbar";

export default function Home({cards}) {
  console.log(cards);
  return (
    <div>
      <Navbar></Navbar>
      <Meta title="Главная"/>
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