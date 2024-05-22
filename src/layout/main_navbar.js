import React, { useEffect, useState } from "react";
import "./main_navbar.scss";
import "../style/style.scss";
import { SiFiverr } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import s1 from "../images/koz.svg";
import s2 from "../images/qalam.svg";
import { IoChevronDownOutline ,IoMenu } from "react-icons/io5";

export default function Navbar({b_main,become_saller}) {
  const [win_Scrol, setWin_Scrol] = useState(false);
  const [innerWidth,setInnerWidth] = useState(window.innerWidth);
  const [tog,setTog] = useState(false);
  const [tog_fiver,setTog_fiver] = useState(false);
  const [tog_explore,setTog_explore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setWin_Scrol(true);
      } else {
        setWin_Scrol(false);
      }
    };

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize',handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">

      {tog&&<Mobile_Navbar funck={()=>{setTog(false)}}/>}

      <div className={win_Scrol?"nav_up back_color":"nav_up"}>

        <div className="width for_padding">
          {innerWidth>1160?"":<span onClick={()=>{setTog(!tog)}}><IoMenu /></span>}
          <div className="logo"><SiFiverr /></div>

          {/* {
            win_Scrol || !b_main || become_saller ? <div className="for_search_in_scrol">
              <input type="text" placeholder="What service are you looking for today?"/>
              <button><IoSearch /></button>
          </div>:""
          } */}

          <div className="navbar_tools">

            <div className="drop_1">
              <p> Fiver Pro <span className={tog_fiver&&"rotate"}><IoChevronDownOutline /></span>  </p>
              <div className="drop_1_items">
                <div className="items">
                  <img src={s1} alt="icons" />
                  <ul>
                      <li>
                        <p className="hd">I'm looking to hire</p>
                      </li>
                      <li>
                        <p className="txt">I'd like to work with Pro freelancers and agencies while using free business tools</p>
                      </li>
                  </ul>
                </div>
                <div className="items">
                <img src={s2} alt="hand and pancil icons" />
                  <ul>
                      <li>
                        <p className="hd">I want to offer Pro services</p></li>
                      <li>
                        <p className="txt">I'd like to work on business projects as a Pro freelancer or agency</p>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="drop_2">
              <p>Explore <span className={tog_explore&&"rotate"}><IoChevronDownOutline /></span></p>
              <div className="drop_2_items">
                  <div className="grps">
                      <p className="hd">Discover</p>
                      <p className="txt">Inspiring projects made on Fiverr</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Community</p>
                      <p className="txt">Connect with Fiverr's team and community</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Guides</p>
                      <p className="txt">In-depth guides covering business topics</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Podcast</p>
                      <p className="txt">Inside tips from top business minds</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Learn</p>
                      <p className="txt">Professional online courses, led by experts</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Blog</p>
                      <p className="txt">News, information and community stories</p>
                  </div>
                  <div className="grps">
                      <p className="hd">Logo Maker</p>
                      <p className="txt">Create your logo instantly</p>
                  </div>
              </div>
            </div>

            <p className="lang"> <TfiWorld /> English</p>
            {/* bu yerda tilni o`zgartiruvchi modal oyna bo`lishi kerak */}

            <p className="be_seller">Become a Seller</p>

            <div className="register_grp">
              <button className="sign_in">Sign in</button>
              <button className="join">Join</button>
            </div>

          </div>

        </div>

      </div>
      {/* nav_up qismi tugashi */}


      {!become_saller || win_Scrol || !b_main?<div className="nav_bottom">
            <div className="width">
              <div className="b_grp">
                  <p className="h_txt">Graphics & Design</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Programming & Tech</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Digital Marketing</p>
                  <div className="for_h"></div>
              </div>  
              <div className="b_grp">
                  <p className="h_txt">Video & Animation</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Writing & Translation</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Music & Audio</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Business</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Consulting</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Data</p>
                  <div className="for_h"></div>
              </div>
              <div className="b_grp">
                  <p className="h_txt">Al Services</p>
                  <div className="for_h"></div>
              </div>
            </div>
            
          </div>  
      :""}

    </div>
  );
}


function Mobile_Navbar({funck}){
  const [browse,setBrowse] = useState(false);
  const [explore,setExplore] = useState(false);
  const [fiver_pro,setFiver_pro] = useState(false);
  const [lang,setLang] = useState(false);
  const [usd,setUsd] = useState(false);
  return(
    <div>
      <div className="mobile_navbar">
        <div className="mob_nav_items">
          <button className="join_btn">Join Fiverr</button>
          <div className="have_drop">
            <a>Sign in</a>
            <div className="browse_drop">
              <p onClick={()=>{setBrowse(!browse)}}>Browse categories <IoChevronDownOutline /></p>
              <div className={browse?"":""}></div>
            </div>
            <div className="explore_drop">
              <p onClick={()=>{setExplore(!explore)}}>Explore <IoChevronDownOutline /></p>
              <div className={explore?"":""}></div>
            </div>
            <div className="explore_drop">
              <p onClick={()=>{setFiver_pro(!fiver_pro)}}>Fiverr Pro <IoChevronDownOutline /></p>
              <div className={fiver_pro?"":""}></div>
            </div>
            <a>General</a>
            <a>Home</a>
            <div className="explore_drop">
              <p onClick={()=>{setLang(!lang)}}><span>English <TfiWorld /></span> <IoChevronDownOutline /></p>
              <div className={lang?"":""}></div>
            </div>
            <div className="explore_drop">
              <p onClick={()=>{setUsd(!usd)}}>US$ USD <IoChevronDownOutline /></p>
              <div className={usd?"":""}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={funck}></div>
    </div>
  )
}