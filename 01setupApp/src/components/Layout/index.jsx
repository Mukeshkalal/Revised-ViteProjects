import Footer from "../Footer"
import Navigation from "../Navigation"

function Layout(props) {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '77vh', marginTop:'10px' }}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
