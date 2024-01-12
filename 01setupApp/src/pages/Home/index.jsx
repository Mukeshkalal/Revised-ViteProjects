import { useState } from 'react'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import CustomStyle from './Home.module.css'
function Home() {
    const [count, setCount] = useState(0)
    const [hide, setHide] = useState('hidden')

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setHide('hidden')
        }
    }

    const handleUpdate = () => {
        if (count < 10) {
            setCount(count + 1)
            setHide('visible')
        }
    }

    const handleRestart = () => {
        if (hide === 'visible') {
            setCount(0)
            return (setHide('hidden')
            )
        }
    };


    return (
        <Layout>
            <div className={CustomStyle.color}>
                <Container>
                    <div className={CustomStyle.blank}><button onClick={handleRestart} >Restart</button></div>
                    <div className={CustomStyle.container}>
                        <button onClick={handleRemove} style={{ visibility: hide }}>-</button>
                        <h1>{count}</h1>
                        <button onClick={handleUpdate}>+</button>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default Home
