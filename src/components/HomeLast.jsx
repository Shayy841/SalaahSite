import React from 'react'
import { Link } from 'react-router-dom';
const HomeLast = () => {
  return (
    <div>
        <div className="creative container">
        <div className="left__side">
          <h1 className="Ultrabold">Let's</h1>
          <h1 className="Ultrabold">connect</h1>
        </div>
        <div className="right__side" style={{width: '70%'}}>
          <p style={{fontFamily: "Poppins, sans-serif",marginBottom:"2.2rem", fontSize: '1.4rem' ,lineHeight: "24px"}}>
          If you’re curious about us, we’re ready to answer any and all questions.
          </p>
          <Link to="/contact" className="btn-creative">
            Contact US
          </Link>
        </div>
      </div>

      <hr style={{width: '80vw', margin: 'auto'}}/>
    </div>
  )
}

export default HomeLast