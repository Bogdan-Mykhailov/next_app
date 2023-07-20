import '@/styles/globals.css'
import Layout from "@/components/layout/Layout";

const App = ({Component, pageProps}) => {
  return (
    <>
      <Layout/>
      <Component {...pageProps} />
    </>
  )
}

export default App;
