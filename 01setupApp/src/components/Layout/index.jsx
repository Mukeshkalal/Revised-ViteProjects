import Footer from "../Footer"
import Navigation from "../Navigation"

function Layout(props) {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '79vh' }}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
