"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { iconsData, TechIcon } from "../../data/icons";
import Style from "./style.module.scss";
function Home() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const DownloadCV =()=>{
    window.open ('/Pallav-Panda_Resume.pdf', '_blank');
  }
  return (
    <>
      <div className={Style.Container}>
        <section className={Style.Container_header}>
          <div className={Style.header_nav}>
            <ul>
              <li>
                <iconsData.List className={Style.Icon} />
              </li>
              <li>
                <iconsData.Home className={Style.Icon} onClick={() => scrollToSection('project')} />
              </li>
              <li>
                <iconsData.Code onClick={() => scrollToSection('tech')} className={Style.Icon} />
              </li>
              <li>
              <iconsData.Upper  className={`${Style.Icon} ${showIcon ? '' : Style.hide}`} onClick={scrollToTop} />
              </li>
            </ul>
          </div>
        </section>
        <section className={Style.Container_hero}>
          <div className={Style.hero_content}>
            <div className={Style.hero_content_profile}>
              <Image src="/pallav.svg" alt="Logo" width={100} height={100} />
            </div>
            <h3 className={Style.hero_content_title}>Hi, I'm Pallav</h3>
            <h2 className={Style.hero_content_sub_title}>Frontend Developer</h2>
            <p className={Style.hero_content_details}>
              Hi there! I'm a passionate front-end developer on a mission to
              craft immersive digital experiences that captivate and inspire.
              Let's innovate together!
            </p>
            <button className={Style.hero_content_cv} onClick={DownloadCV}>
              <iconsData.Download className={Style.DownloadCV} />
              Download CV
            </button>
            <ul className={Style.hero_content_social}>
              <li>
                <iconsData.Github className={Style.social_icon} />
                Github
              </li>
              <li>
                <iconsData.Linkedin className={Style.social_icon} />
                Linkedin
              </li>
              <li>
                <iconsData.Mail className={Style.social_icon} />
                E-mail
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section>
          <div className={Style.timeline}>
            <ul>
            <li>
                <p className={Style.content}>
                  <iconsData.Code />
                  Computer Science
                </p>

                <p className={Style.time}>
                  <iconsData.Education />
                  B.C.A
                
                 
                </p>
              </li>
              <li>
                <p className={Style.content}>
                  <iconsData.Code />
                  Associate Digital Engineer
                </p>

                <p className={Style.time}>
                  <iconsData.Job />
                  RapidQube
                </p>
              </li>
              <li>
                <p className={Style.content}>
                  <iconsData.Code />
                  Frontend Developer
                </p>

                <p className={Style.time}>
                  <iconsData.Job />
                  Fulcro
                </p>
              </li>

              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </section>
        <hr />
        <section className={Style.Container_Project} id="project">
          <div className={Style.Projects_box}>
            <h2 className={Style.Projects_title}>Projects</h2>
            <div className={Style.Projects_cards}>
              <div className={Style.Projects_card}>
                <h3 className={Style.card_title}>my project-1</h3>
                <p className={Style.card_details}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <a className={Style.card_btn}>
                  Read More
                  <iconsData.sideArrow />
                </a>
                <ul className={Style.card_tech}>
                  <li>
                    <TechIcon.HTML />
                  </li>
                  <li>
                    {" "}
                    <TechIcon.CSS />
                  </li>
                  <li>
                    <TechIcon.JS />
                  </li>
                </ul>
              </div>
              <div className={Style.Projects_card}>
                <h3 className={Style.card_title}>my project-1</h3>
                <p className={Style.card_details}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <a className={Style.card_btn}>
                  Read More
                  <iconsData.sideArrow />
                </a>
                <ul className={Style.card_tech}>
                  <li>
                    <TechIcon.HTML />
                  </li>
                  <li>
                    {" "}
                    <TechIcon.CSS />
                  </li>
                  <li>
                    <TechIcon.JS />
                  </li>
                </ul>
              </div>
              <div className={Style.Projects_card}>
                <h3 className={Style.card_title}>my project-1</h3>
                <p className={Style.card_details}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <a className={Style.card_btn}>
                  Read More
                  <iconsData.sideArrow />
                </a>
                <ul className={Style.card_tech}>
                  <li>
                    <TechIcon.HTML />
                  </li>
                  <li>
                    {" "}
                    <TechIcon.CSS />
                  </li>
                  <li>
                    <TechIcon.JS />
                  </li>
                </ul>
              </div>
              <div className={Style.Projects_card}>
                <h3 className={Style.card_title}>my project-1</h3>
                <p className={Style.card_details}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <a className={Style.card_btn}>
                  Read More
                  <iconsData.sideArrow />
                </a>
                <ul className={Style.card_tech}>
                  <li>
                    <TechIcon.HTML />
                  </li>
                  <li>
                    {" "}
                    <TechIcon.CSS />
                  </li>
                  <li>
                    <TechIcon.JS />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className={Style.Container_Tech} id="tech">
          <div>
            <h2>Technology</h2>
            <div className={Style.tech_Card}>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.HTML className={Style.icon} />
                  HTML
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.CSS className={Style.icon} />
                  CSS3
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.JS className={Style.icon} />
                  JavaScript
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.React className={Style.icon} />
                  ReactJs
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.NextJs className={Style.icon} />
                  NextJs
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.NodeJS className={Style.icon} />
                  NodeJs
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.MongoDB className={Style.icon} />
                  MongoDB
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.Redux className={Style.icon} />
                  Redux
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.PGSQL className={Style.icon} />
                  PGSQL
                </p>
              </div>
            </div>
            <h2>DevOps</h2>
            <div className={Style.tech_Card}>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.Git className={Style.icon} />
                  Git
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.Docker className={Style.icon} />
                  Docker
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.Postman className={Style.icon} />
                  Postman
                </p>
              </div>
              <div className={Style.Tech_icon}>
                <p>
                  <TechIcon.VSCode className={Style.icon} />
                  VSCode
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className={Style.footer}>@Pallav Panda</footer>
    </>
  );
}

export default Home;
