import '@/styles/globals.css'
import NavBar from '@/pages/Components/NavBar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
