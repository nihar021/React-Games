import React from 'react'
import './Singlecard.css'

const NewCard = ({card,handleChoice,flipped,disabled}) => {
 
const handleClick=()=>{
  if(!disabled){
     handleChoice(card)
  }
}

  return (
    <div className='card' >
       <div className={flipped? "flipped":""}>
           <img className='front' src={card.src} alt='front img'/>
           <img 
              className='back' 
              onClick={handleClick} 
              src='/img/cover.png'
              alt='back img'    
            />
       </div>
    </div>
  )
}

export default NewCard