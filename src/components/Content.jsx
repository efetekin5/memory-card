import '../styles/Content.css'
import { useEffect, useState } from 'react'

export default function Content() {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        const getResponse = async () => {
            try {
                const response = await fetch('https://thronesapi.com/api/v2/Characters');
                const data = await response.json();    
            } catch (error) {
                console.log(error);
            }
        }

        getResponse();
    }, []);

    return(
        <div className='content'>
            <div className='grid'>
                characterD
            </div>
        </div>
    )
}