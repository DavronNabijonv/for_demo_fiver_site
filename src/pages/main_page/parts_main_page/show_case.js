import React, { useEffect, useState } from "react";
import "../../../style/style.scss";
import "./show_case.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { main_carusel } from "../../../db/slider";

function Show_case() {
  return (
    <div className="show_case width">
      <div className="for_search_free">
        <div className="for_txt">
            <h1>Find the rigth <span>freelance</span> servise, right away</h1>
        </div>
        <div className="for_search">
            <input type="text" placeholder="Search for any sevice..." />
            <button><IoSearchOutline /></button>
        </div>
        <div className="btns_grp">
            <p>Popular: </p>
            <a>Website Design</a>
            <a>WordPress</a>
            <a>Logo Design</a>
            <a>AI Servises</a>
        </div>
      </div>
      <div className="for_opacity_slider">
        <Show_case_slider/>
      </div>
    </div>
  );
}

export default Show_case;


function Show_case_slider(){
  const [myIndex, setMyIndex] = useState(0);

  useEffect(()=>{
    const carusel = ()=>{
      const x = document.getElementsByClassName('slider');
      for(let i = 0 ; i < x.length;i++){
        x[i].style.opacity = 0;
      }
      setMyIndex(prevIndex => (prevIndex+1));
      if(myIndex>=x.length-1){setMyIndex(0);console.log(myIndex)};
      try{
        x[myIndex].style.opacity = 1; 
      }catch (error) {
        console.log(error);
      }
      console.log(myIndex);
    }

    const timeuot = setTimeout(carusel,2000);

    return ()=> clearTimeout(timeuot);
  },[])

  return(
    <div className="show_case_slider">
      {main_carusel.map((r,index)=>(
        <div className="slider" key={index} style={{backgroundImage:`url(${r.back_img_url})`}} >
            <div className="carusel_little">
              <img src={r.img_url} alt={r.email}/>
              <div className="inner_texts">
                <div className="widthRange">
                  <p className="email">{r.email}</p>
                  {r.range&&<p className="email">{r.range} <MdOutlineStar /></p>}
                </div>
                <p className="job_role">{r.job_role}</p>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}