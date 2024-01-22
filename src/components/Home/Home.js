import React, {useEffect} from 'react'
import './home.css'
import img from '../../Assets/img home.jpg';
import { CiSearch } from "react-icons/ci";
import Aos from 'aos'

const Home = () => {

 useEffect(() =>{
  Aos.init({duration: 2000})
 }, [])

  return (
    <section className='home'>

        <img src={img} alt="Background" className="background-image" />

       <div className="homeContent container">

        <div data-aos="fade-up" className="cardDiv grid">
           <div className="destinationInput">
            <label htmlFor="title">
              Search of Heraldry:
            </label>

            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
            </div>
           </div>

           <div className="searchOptions flex">
            <CiSearch  className="icon"/>
            <span>Search</span>
           </div>
         </div>
       </div>
    </section>
  )
}

export default Home