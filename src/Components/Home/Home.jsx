import React from 'react'
import './home.css'
import video from '../../Assests/video.mp4'
import { CiLocationOn } from "react-icons/ci";


// video arif ışık at assest diye bir dosya yap ve src içine koy//
const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent Container">
        <div className="textDiv">
          <spam className="smallText">
            Our Packages
          </spam>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>
      </div>
      <div className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:
          </label>
          <div className="input flex">
            <input type="text" placeholder='Enter name here...' />
            <CiLocationOn className="icon" />


          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Search your date:
          </label>
          <div className="input flex">
            <input type="date" />



          </div>
        </div>
        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max price:</label>
            <h3 className="total"></h3>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home