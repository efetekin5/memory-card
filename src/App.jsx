import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return(
        <>
            <Header
                score={score}
                bestScore={bestScore}
            ></Header>

            <Content
                score={score}
                setScore={setScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
            ></Content>

            <Footer></Footer>
        </>
    )
}