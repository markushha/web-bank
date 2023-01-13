import Image from "next/image";
import accounting from "accounting-js";
import Link from "next/link";

function CardItem({card}) {
    return (
        // карта
        <Link href={`/cards/${card.id}`}>
            <div
                className="rounded-xl p-5 mx-auto mt-4 items-center text-white w-[400px] mb-4"
                style={{backgroundColor: card.color}}
            >
                <Image
                    src="/masterCardLogo.png"
                    alt="masterCard logo"
                    width={80}
                    height={55}
                />
                <div className="text-3xl mt-4">{card.number}</div>
                <div className="mt-1 opacity-30 text-xs">Cardholder</div>
                <div className="text-2xl">{card.name}</div>
                <div className="mt-1 opacity-30 text-xs">Current Balance</div>
                <div className="text-2xl">
                    {accounting.formatMoney(card.balance, {
                        symbol: "KZT",
                        format: "%v %s",
                    })}
                </div>
            </div>
        </Link>
    );
}

export default CardItem;
