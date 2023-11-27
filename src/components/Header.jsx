import '../styles/Header.css';
import imdbLogo from '../assets/imdb.png'

export default function Header({score, bestScore}) {
    console.log('a')
    return(
        <div className="header">
            <img className='imdbLogo' src={imdbLogo}></img>
            <h1 className='footerHeader'>Try Not To Click The Same Card Twice</h1>
            <div className='scores'>
                <p className='score'>Current Score: {score}</p>
                <p className='score'>Best Score: {score}</p>
            </div>
        </div>
    )
}