import React from 'react'
import { Link } from 'react-router-dom';
const FaqLast = () => {
  return (
    <div>
        <div className="creative container">
        <div className="left__side">
          <h1 className="Ultrabold">Seek</h1>
          <h1 className="Ultrabold">Guidance</h1>
        </div>
        <div className="right__side" style={{width: '70%'}}>
          <p style={{fontFamily: "Poppins, sans-serif",marginBottom:"2.2rem", fontSize: '1.4rem' ,lineHeight: "24px"}}>
          Explore various career roles and connect with our mentors for better results.
          </p>
          <Link to="/company" className="btn-creative">
            Proceed
          </Link>
        </div>
      </div>

      <hr style={{width: '80vw', margin: 'auto'}}/>
    </div>
  )
}

export default FaqLast