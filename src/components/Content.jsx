import '../styles/Content.css'
import { useEffect, useState } from 'react'

export default function Content({score, setScore, bestScore, setBestScore}) {
    const [characterData, setCharacterData] = useState([]);
    const [sliceFrom, setSliceFrom] = useState(0);
    const [sliceTo, setSliceTo] = useState(8);

    useEffect(() => {
        const getResponse = async () => {
            try {
                const response = await fetch('https://thronesapi.com/api/v2/Characters');
                const data = await response.json();
                const newData = data.slice(sliceFrom, sliceTo).map((character) => ({
                        ...character,
                        isClicked: false
                }))
                setCharacterData(newData);  
            } catch (error) {
                console.log(error);
            }
        }

        getResponse();
    }, [sliceFrom, sliceTo]);

    function handleCLick(id) {
        const clickedCharacter = characterData.filter((character) => character.id === id);

        if(clickedCharacter[0].isClicked === false) {
            console.log('a')
            setScore((prevScore) => prevScore + 1);

            const updatedData = characterData.map((character) => {
                if(character.id === id) {
                    return {
                        ...character,
                        isClicked: true
                    }
                } else {
                    return character;
                }
            })

            const needNewCharacters = updatedData.every((character) => character.isClicked === true)
            if(needNewCharacters === true) {
                if(sliceFrom === 32) {
                    setSliceFrom(0);
                    setSliceTo(8);
                } else {
                    setSliceFrom((prevIndex) => prevIndex + 8);
                    setSliceTo((prevIndex) => prevIndex + 8);
                }
            } else {
                for(let i = characterData.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * i);
                    [updatedData[i], updatedData[j]] = [updatedData[j], updatedData[i]];
                }
    
                setCharacterData(updatedData);
            }
        } else {
            console.log('b')
            if(score > bestScore) {
                setBestScore(score);
            }
            setScore(0);

            if(sliceFrom === 0 && sliceTo === 8) {
                const updatedData = [...characterData];

                for(let i = 0; i < 8; i++) {
                    updatedData[i].isClicked = false;
                }
    
                for(let i = characterData.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * i);
                    [updatedData[i], updatedData[j]] = [updatedData[j], updatedData[i]];
                }

                setCharacterData(updatedData)
            } else {
                setSliceFrom(0);
                setSliceTo(8);
            }
        }
    }

    return(
        <div className='content'>
            <div className='grid'>
                {characterData.map((character) => {
                    return(
                        <div key={character.id} id={character.id} className='character' onClick={() => {handleCLick(character.id)}}>
                            <img className='characterImg' src={character.imageUrl}></img>
                            <p className='characterName'>{character.fullName}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}