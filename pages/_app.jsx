import '@/styles/globals.css'
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const App = ({Component, pageProps}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content="NextJS Events"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App;
