import Head from "next/head";

export function Meta({title}) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}