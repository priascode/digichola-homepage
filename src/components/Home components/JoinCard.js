import React from 'react'
import '../../Home styles/Joincard.css'


const JoinCard = (props) => {
    const title = props.tit;
    const subtitle = props.subtit;
    const image = props.img;
  return (
    <div className='card'>
        <div className='card-content'>
            <img src={image} alt='profile picture'/>
            <div>
                <p className='title'>{title}</p>
                <p>{subtitle}</p>
            </div>
        </div>
       <div className='joinbtns'>
        <button className='joinbtn'>{props.amt}</button>
        <button className='joinbtn'>Join</button>
       </div>
    </div>
  )
}

export default JoinCard;