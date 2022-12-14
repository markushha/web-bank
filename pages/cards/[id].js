import CardItem from "../../app/cards/CardItem";
import {Meta} from "../../app/utils/Meta";
import Navbar from "../../app/components/Navbar";
import Link from "next/link";
import {GrReturn} from "react-icons/gr";

function Card({card}) {
    return ( // отдельная страница для каждой карточки
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center">
                <Meta title="Card Info"/>
                <CardItem card={card}/>
                <Link href="/cards">
                    <button
                        className={"w-12 h-12 rounded-2xl bg-gray-400 hover:bg-gray-600 transition-all flex items-center justify-center color-white"}>
                        <GrReturn className="mr-1 mt-0.5"></GrReturn>
                    </button>
                </Link>
            </div>
        </>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/cards/');
    const data = await res.json();

    const paths = data.map(card => {
        return {
            params: {id: card.id}
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