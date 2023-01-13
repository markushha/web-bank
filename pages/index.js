import InfoItem from "../app/components/InfoItem";
import { Meta } from "../app/utils/Meta";
import Navbar from "../app/components/Navbar";

export default function Home({ cards }) {
  return (
    <>
      <Navbar />
      <Meta title="Главная" />

      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold opacity-75 mt-12 mb-6">
          Kaspi.kz - the bank of the <span className="">future</span>
        </h1>
        <div className="text-center">
          <p className="text-lg font-semibold">
            Our bank was established 12 years ago. We are young and strong team
            motivated to innovate and develop.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row mt-12">
        <div className="mx-12">
          <InfoItem
            title="Convenience"
            description="Kaspi.kz offers a user-friendly online platform that allows customers to access their accounts and conduct transactions from anywhere at any time, making it a convenient option for busy individuals"
          />
        </div>
        <div className="mx-12">
          <InfoItem
            title="Security"
            description="Kaspi.kz provides advanced security features, such as multi-factor authentication and encryption, to protect customers' sensitive information from fraud and hacking"
          />
        </div>
        <div className="mx-12">
          <InfoItem
            title="Cost-effective"
            description="Kaspi.kz offers various services such as account maintenance, check printing and more at lower costs than traditional banks. Additionally, they often offer competitive interest rates on their financial products"
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/cards/");
  const cards = await res.json();

  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
}
