import Footer from "../Footer"
import Navigation from "../Navigation"

function Layout(props) {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '80vh', boxSizing:'border-box' }}>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
