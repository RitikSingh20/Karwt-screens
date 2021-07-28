import React from "react";
import Blog from './Blog'
import { Link } from "react-router-dom"; 
import Blogdata from "./Blogdata";
import { Blogdetails } from "./Blogdetails";
import Blogdetail from "./Blogdetail";
 
 
 

function nblog(val){

    return (
      <Blog 
        imgsrc={val.imgsrc}
        bdetail={val.bdetail}
        review={val.review}
        date={val.review}
        aname={val.aname}
        para={val.para}
         />
    )
  
}

function nblogdetails(val){

    return  (
        <Blogdetails 

          imgsrc={val.imgsrc}
          title={val.title}
          name={val.name}
          review={val.review}
          date={val.date}
          aname={val.aname}
          para={val.para}
        
        />
    )
}

 
 
 export const Home = () => {
     return (
         <div>
         {Blogdata.map(nblog)}
         {Blogdetail.map(nblogdetails)}
         </div>
     )
 }
 