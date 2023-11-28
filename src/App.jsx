import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header'
import Content from './components/Content'

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
        </>
    )
}