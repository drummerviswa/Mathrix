import React from 'react'
import "./EventCard.css"

const EventCard = (props) => {
  const handleClick = () => {
    window.open(props.url,'_blank')
  }
  return (
    <>
      <div className="col" style={{ padding: 10 }}>
        <a onClick={() => handleClick()}>
          <div id='card' className="card animate__animated animate__flip animate__delay-0.9s" style={{ width: 175,cursor:"pointer",backgroundColor:"#291a39",borderWidth:5,borderColor:"#7e36c7" }}>
            <img pointer style={{ pointerEvents:'none',height: 150 }} src={props.img} className="card-img-top" alt="..." />
            <div className="card-body" style={{color:"white",textAlign:"start"}}>
              <h5 className="card-title" style={{fontSize:18}}>{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default EventCard