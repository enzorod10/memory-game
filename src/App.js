import React, {useState, useEffect} from "react";
import uniqid from 'uniqid'
import './style.css'
import butterfree from './assets/butterfree.png'
import dragonair from './assets/dragonair.png'
import dragonite from './assets/dragonite.png'
import meowth from './assets/meowth.png'
import mudkip from './assets/mudkip.png'
import pikachu from './assets/pikachu.png'
import sandshrew from './assets/sandshrew.png'
import squirtle from './assets/squirtle.png'
import totogile from './assets/totodile.png'
import zapdos from './assets/zapdos.png'

function App() {
  const [currentScore, getCurrentScore] = useState(0)
  const [bestScore, getBestScore] = useState(0)
  const [playStatus, getPlayStatus] = useState('inProgress')
  const [images, getImages] = useState([
    { image: butterfree,
    clicked: 'false',
    name: 'butterfree' }, 
    { image: dragonair,
    clicked: 'false',
    name: 'dragonair' },
    { image: dragonite,
    clicked: 'false',
    name: 'dragonite' },
    { image: meowth,
    clicked: 'false',
    name: 'meowth' },
    { image: mudkip,
    clicked: 'false',
    name: 'mudkip' },
    { image: pikachu,
    clicked: 'false',
    name: 'pikachu' }, 
    { image: sandshrew,
    clicked: 'false',
    name: 'sandshrew' }, 
    { image: squirtle,
    clicked: 'false',
    name: 'squirtle' }, 
    { image: totogile,
    clicked: 'false',
    name: 'totogile' }, 
    { image: zapdos,
    clicked: 'false',
    name: 'zapdos' },  
  ])

  useEffect(() => {
    let tempArray = images.sort(() => Math.random() - 0.5)
    getImages(tempArray)
  
  }, [currentScore, images, playStatus])

  const handleClick = (element) => {
    console.log(element.name)
    if (element.clicked === 'false'){
      getCurrentScore(currentScore + 1)
      element.clicked = 'true'
    }
    else{
      if (bestScore < currentScore){ 
        getBestScore(currentScore)
      }
      getCurrentScore(0)
      getPlayStatus('lost')
      let newArray = [...images]
      newArray.forEach(elem => {
        elem.clicked = 'false'
      }) 
      getImages(newArray)
    }
  } 

  return (
    <div>
      <div className='header'>
        <div>
          PokeMem
        </div>
        <div className='scoreContainer'>
          <div className='currentScore'>Current Score: {currentScore} </div>
          <div className='bestScore'>Best Score: {bestScore} </div>
        </div>   
      </div>

      <div className='gridContainer'>
        {images.map(elem => {
          return (
            <div onClick={() => handleClick(elem)} className='gridElements' key={uniqid()} >
            <img className='pokemon' alt='pokemon figure' src={elem.image}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;