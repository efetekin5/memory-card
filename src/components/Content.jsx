import '../styles/Content.css'
import { useEffect, useState } from 'react'

export default function Content() {
    const [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        const getResponse = async () => {
            try {
                const response = await fetch('https://thronesapi.com/api/v2/Characters');
                const data = await response.json();  
                setCharacterData(data);  
            } catch (error) {
                console.log(error);
            }
        }

        getResponse();
    }, []);

    return(
        <div className='content'>
            <div className='grid'>
                {characterData.slice(0, 8).map((character) => {
                    return(
                        <div className='character'>
                            <img className='characterImg' src={character.imageUrl}></img>
                            <p className='characterName'>{character.fullName}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}