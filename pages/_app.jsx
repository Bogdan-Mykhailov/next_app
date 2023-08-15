import '@/styles/globals.css'
import Layout from "@/components/layout/Layout";
import Notification from '../components/ui/Notification/Notification'
import Head from "next/head";
import {NotificationContextProvider} from "@/store/notification-context";

const App = ({Component, pageProps}) => {

  return (
    <>
      <NotificationContextProvider>
        <Layout>
          <Head>
            <title>NextJS Events</title>
            <meta name="description" content="NextJS Events"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </>
  )
}

export default App;
