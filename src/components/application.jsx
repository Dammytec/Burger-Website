import React from "react";
import { Link } from "react-router-dom";
import Headers from "../shared-components/headers";
import Footer from "../shared-components/footer";
import UploadForm from "./upload";
function Application() {
  return (
    <div className=" bg-[#f5ebdc]"> 
      <Headers />
      <div className=" flex flex-col items-center text-center">
        <h1 className=" pt-32 text-3xl mr-56 font-[900] font-[flame] pr-9">Application Form</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className=" border outline-[#d72300] mt-3  h-14 w-[500px] font-[flame] font-[700] text-black placeholder:text-black pl-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className=" border mt-8 outline-[#d72300]  h-14 w-[500px] font-[flame] font-[700] text-black placeholder:text-black pl-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Type of Role (e.g crew member)"
              className=" border outline-[#d72300] mt-8  h-14 w-[500px] font-[flame] font-[700] text-black placeholder:text-black pl-4"
            />
          </div>
      <div>
        <UploadForm/>
      </div>

          <div className=" w-[480px] bg-[#d72300] text-center font-[900] font-[flame] text-white rounded-xl mt-4 items-center mb-32"><button>Submit</button></div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}




export default Application;
