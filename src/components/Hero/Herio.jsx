import React from 'react'
import './herio.css'

const Herio = () => {
  return (
    <>Herio
    {/* <div class="container"> */}
      {/* <div class="container__inner"> */}
        <div class="hero-banner">
          <div class="hero-banner__wrapper">
            {/* <div class="hero-banner__image-wrapper"> */}
              <div class="hero-banner__image">
                <div class="hero-banner__image-tag">Image 1</div>

                <picture> 
                  {/* <source srcset="https://via.placeholder.com/580x580/00FF00" media="(min-width: 1025px)" />
                  <source srcset="https://via.placeholder.com/1000x1000/FFFF00" media="(min-width: 768px)" />
                  <source srcset="https://via.placeholder.com/580x580/00FF00" media="(min-width: 0px)" /> */}
                  <img class="img-fluid" src="https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80" alt="" />
                </picture>
              </div>
            {/* </div> */}
            
            <div class="hero-banner__content">
              <a href="#">
                <h1 class="hero-banner__title">The spring collection</h1>
              </a>
              <p>New styles have arrived!</p>
              <a href="#">Check em out</a>
            </div>

          </div>
        </div>
      {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default Herio