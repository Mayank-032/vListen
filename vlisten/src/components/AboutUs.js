import React from 'react'
import "../css/About.css"

export default function AboutUs() {
  return (
    <div className="container1">
      <div className="about_heading">
        <h3 style={({ marginLeft: '0.8rem' })}>About US</h3>
      </div>
      <div className="row">
        <div className="col-5" id="about_text">
  
          <div className="text_heading">
            <h4>Our Vision</h4>
          </div>

          <div className="text_content">
            <p>
              Music is the art of arranging sound.It is one of the universal cultural aspects of all human 
              societies. Music may be defined with styles that emphasize, de-emphasize, or omit common elements 
              of organized sound, such as rhythm, volume and pitch. 
            </p>

            <p>
              So, in order to provide best quality music completely free and without any ads or trackers,
              we have made this web app. People can <strong>listen ad-free music</strong> along with have a <strong>live chit chat </strong> 
              with each other and can also <strong>join live events</strong> organized by us with your favourite musicians.
            </p>
          </div>

        </div>

        <div className="col-5" id="about_img">
          <img src='https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljYWwlMjBuaWdodHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Musical Nights" />
        </div>
      </div>
    </div>
  )
}
