import React from 'react'
import EmployeeList from '../Components/EmployeeList'
import Settings from '../Components/Settings'
import PromoNote from '../Components/PromoNote'
// import Navbar from '../Components/Home/Navbar'
// import Home from '../Components/Home/Home'
// import Features from '../Components/Home/Features'
// import Pricing from '../Components/Home/Pricing'
// import About from '../Components/Home/About'
// import Contact from '../Components/Home/Contact'
// import Footer from "../Components/Home/Footer"
// import Testimonial from '../Components/Home/Testimonial'
import Note from '../Components/Note'
const HomePage = () => {
  return (
    <div>
      <Note/>
      <EmployeeList/>
      <PromoNote/>
{/* <Navbar/>
<Home/>
<Features/>
<Pricing/>
<Testimonial/>
<About/>
<Contact/>
<Footer/> */}
    </div>
  )
}

export default HomePage