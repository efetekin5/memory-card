import githubLogo from '../assets/githubLogo.png'
import '../styles/Footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <p className='footerText'>Made By Efe Tekin</p>
            <a href='https://github.com/efetekin5' target='blank'><img className='githubLogo' src={githubLogo}></img></a>
        </div>
    )
}