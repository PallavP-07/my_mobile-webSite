"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { iconsData } from "../../data/icons";
import Style from "./style.module.scss";
import axios from "axios";

import { projects, tech, Other, social } from "../../data/data";
function Home() {
  const [showIcon, setShowIcon] = useState(false);
  const [contact, setContact] = useState({
    uname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setContact({
      ...contact,
      [e.target.name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/sendEmail", contact);
      if (response.status === 200) {
        console.log("Email sent successfully");
        // Reset form state
        setContact({ uname: "", email: "", message: "" });
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const DownloadCV = () => {
    window.open("/Pallav_Panda_Resume.pdf", "_blank");
  };
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
                <iconsData.Home
                  className={Style.Icon}
                  onClick={() => scrollToSection("project")}
                />
              </li>
              <li>
                <iconsData.Code
                  onClick={() => scrollToSection("tech")}
                  className={Style.Icon}
                />
              </li>
              <li>
                <iconsData.Upper
                  className={`${Style.Icon} ${showIcon ? "" : Style.hide}`}
                  onClick={scrollToTop}
                />
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
            <h2 className={Style.hero_content_sub_title}>
              MERN Stack Developer
            </h2>
            <p className={Style.hero_content_details}>
              Hi there! I'm a passionate MERN stack developer on a mission to
              craft immersive digital experiences that captivate and inspire.
              Let's innovate together!
            </p>
            <button className={Style.hero_content_cv} onClick={DownloadCV}>
              <iconsData.Download className={Style.DownloadCV} />
              Download CV
            </button>
            <ul className={Style.hero_content_social}>
              {social.map((item, index) => (
                <li key={index}>
                  {item.icon && <item.icon className={Style.social_icon} />}
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* <hr />
        <section>
          <div className={Style.timeline}>
            <ul>
              <li>
                <p className={Style.content}>
                  <iconsData.Code />
                  2016-2021
                </p>

                <p className={Style.time}>
                  <iconsData.Education />
                  B.C.A
                </p>
              </li>
              <li>
                <p className={Style.content}>
                 
                  Mar-22 to Aug-23
                </p>

                <p className={Style.time}>
                  <iconsData.Job />
                  RapidQube <br/> Associate Digital Engineer
                </p>
              </li>
              <li>
                <p className={Style.content}>
                 
                  Sep-23 to Mar-24
                </p>

                <p className={Style.time}>
                  <iconsData.Job />
                  Fulcro <br/> Frontend Developer
                </p>
              </li>

              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </section> */}
        <hr />
        <section className={Style.Container_Project} id="project">
          <div className={Style.Projects_box}>
            <h2 className={Style.Projects_title}>Projects</h2>
            <div className={Style.Projects_cards}>
              {projects.map((item, index) => (
                <div className={Style.Projects_card} key={index}>
                  <h3 className={Style.card_title}>{item.title}</h3>
                  <p className={Style.card_details}>{item.discription}</p>
                  <a className={Style.card_btn}>
                    Read More
                    <iconsData.sideArrow className={Style.card_btn_icon} />
                  </a>

                  <ul className={Style.card_tech}>
                    {item.tech.map((techItem, techIndex) => (
                      <li key={techIndex}>
                        {techItem.icon && <techItem.icon />}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr />
        <section className={Style.Container_Services}></section>
        <hr />
        <section className={Style.Container_Tech} id="tech">
          <div>
            <h2>Technology</h2>
            <div className={Style.tech_Card}>
              {tech.map((item, index) => (
                <div className={Style.Tech_icon} key={index}>
                  <p>
                    {item.tech && <item.tech className={Style.icon} />}
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <h2>Tools</h2>
            <div className={Style.tech_Card}>
              {Other.map((item, index) => (
                <div className={Style.Tech_icon} key={index}>
                  <p>
                    {item.tech && <item.tech className={Style.icon} />}
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr />
        <section className={Style.Container_Contact}>
          <h2>Contact Me</h2>
          <div className={Style.contact_box}>
            <input
              type="text"
              id="name"
              name="uname"
              placeholder="enter your name"
              value={contact.uname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="enter your E-mail"
              value={contact.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="enter your message.."
              value={contact.message}
              onChange={handleChange}
              required
            />
            <button onClick={submitHandler} className={Style.contact_box_btn}>
              Submit
            </button>
          </div>
        </section>
      </div>
      <footer className={Style.footer}>@Pallav Panda</footer>
    </>
  );
}

export default Home;
