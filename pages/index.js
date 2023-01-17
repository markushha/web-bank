import InfoItem from "../app/components/InfoItem";
import {Meta} from "../app/utils/Meta";
import Navbar from "../app/components/Navbar";
import Carousel from "../app/components/Carousel";
import {useEffect, useState} from "react";

export default function Home({cards}) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, [])
    
    return (
        <>
            <Navbar token={token}/>
            <Meta title="Главная"/>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="w-[1000px]">
                    <div className="flex items-center justify-center flex-col">
                        <h1 className="text-4xl font-bold opacity-75 mt-12 mb-6">
                            Kaspi.kz - the bank of the <span className="">future</span>
                        </h1>
                        <div className="text-center">
                            <p className="text-2xl font-semibold opacity-90">
                                Our bank was established 12 years ago. We are young and strong team
                                motivated to innovate and develop
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between flex-row mt-12">

                        <InfoItem
                            title="Convenience"
                            description="Kaspi.kz offers a user-friendly online platform that allows customers to access their accounts and conduct transactions from anywhere at any time, making it a convenient option for busy individuals"
                        />


                        <InfoItem
                            title="Security"
                            description="Kaspi.kz provides advanced security features, such as multi-factor authentication and encryption, to protect customers' sensitive information from fraud and hacking"
                        />


                        <InfoItem
                            title="Cost-effective"
                            description="Kaspi.kz offers various services such as account maintenance, check printing and more at lower costs than traditional banks. Additionally, they often offer competitive interest rates on their financial products"
                        />

                    </div>

                    <div className="my-20">
                        <Carousel />
                    </div>

                    <div className="flex items-center justify-center flex-col my-20">
                        <div className={"text-right  bg-gray-900 p-8 rounded-xl text-white"}>
                            <p className="text-xl">
                                Kaspi.kz is a leading online bank in Kazakhstan that offers a wide range of financial
                                services
                                to
                                its customers. One of the main benefits of using this bank is the convenience it
                                provides.
                                With
                                Kaspi.kz, customers can access their accounts and conduct transactions from anywhere at
                                any
                                time,
                                making it a perfect option for busy individuals. Furthermore, the bank's online platform
                                is
                                user-friendly and easy to navigate, which makes it accessible to customers of all ages
                                and
                                technical
                                proficiency.

                                Another important advantage of using Kaspi.kz is the high level of security it provides.
                                The
                                bank
                                uses advanced security features such as multi-factor authentication and encryption to
                                protect
                                customers' sensitive information from fraud and hacking. This ensures that customers'
                                personal
                                and
                                financial information is kept safe and secure at all times.

                                Kaspi.kz also offers cost-effective services compared to traditional banks. The bank
                                offers
                                various
                                services such as account maintenance, check printing and more at lower costs.
                                Additionally,
                                they
                                often offer competitive interest rates on their financial products, which can help
                                customers
                                save
                                money in the long run.

                                In conclusion, Kaspi.kz is a great option for customers looking for a convenient, secure
                                and
                                cost-effective online banking experience. With its user-friendly platform, advanced
                                security
                                features and competitive rates, Kaspi.kz is the perfect choice for anyone looking to
                                manage
                                their
                                finances in an easy and efficient way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export async function getStaticProps() {
//     const res = await fetch("http://localhost:3000/api/cards/");
//     const cards = await res.json();

//     return {
//         props: {
//             cards,
//         },
//         revalidate: 10,
//     };
// }
