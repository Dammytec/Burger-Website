import React from "react";
import { Link } from "react-router-dom";
import Headers from "../shared-components/headers";
import Footer from "../shared-components/footer";


function Careers() {
    return(
        <div className=" bg-[#f5ebdc]">
    <Headers/>
      <div className=" pt-24 w-[90%] m-[auto] text-[50px] font-[900] font-[flame] tracking-tight">
        <h2>Your Career,</h2>
        <h2 className=" mt-5">Your Way</h2>
      </div>
      <div className=" w-[90%] m-auto mt-4">
        <div>
            <img src="https://s3-eu-central-1.amazonaws.com/www.burger-king.ng/wp-media-folder-burger-king-nigeria//home/ubuntu/wordpress/web/app/uploads/sites/12/gallery_.png" alt=""  width='100%' height='100%'/>
        </div>
      </div>
      <div className="  text-center">
        <div className=" text-5xl mt-7 font-[900] font-[flame] tracking-tight">
            <h1>We may be the King,</h1>
            <h1 className=" mt-2">but around here, my friend,</h1>
            <h1 className=" mt-2">YOU rule your career.</h1>
        </div>
        <div className=" font-[700] font-[flame] tracking-tight mt-14">
            <p>You get to do things your way, and be, well, just you.</p>
            <p>The team's a proper team. We have a laugh, and we've got your back</p>
            <p>And because we are shaking up fast food and opening restaurants like</p>
            <p>nobody's business, you get to be a part of something (royally) huge.</p>
            <p>It is only what "one" deserves.</p>
        </div>
        <button className=" bg-[#d72300] mt-10 w-48 h-12 p-1 rounded-2xl text-white font-[900] font-[flame] mb-52"><Link to='/applicationcd'>Find the King Vacancy</Link></button>
      </div>
      <Footer/>
        </div>
    )
}

export default Careers