import React, { useRef, useState } from "react";
import Live from "../../assets/svg/Live";
import Podcast from "../../assets/svg/Podcast";
import Sissor from "../../assets/svg/Sissor";
import VideoCamIcon from "../../assets/svg/VideoCamIcon";
import UserProfile from "../userProfile/UserProfile";
import styles from "./Dashboard.module.scss";
import satranga from "../../assets/satranga.jpg";

const recentVideos = ["Project - 1", "Project - 2", "Project - 3", "Project - 4", "Project - 5", "Project - 6"];


function Dashboard() {
  return (
    <>
      <div className={`${styles.dashboardWrapper} p-[20px]`}>
        <div>
          <input
            type="search"
            placeholder="Search"
            className={`${styles.searchInput}`}
          />
        </div>
        <UserProfile />
      </div>
      <div className="p-[20px] flex gap-[20px]">
        <a
          href="/create-project"
          className="inline-flex items-center gap-[5px] border border-1 border-black rounded-[6px] px-[15px] py-[5px] hover:bg-[#ece9e9] hover:rounded-[6px]"
        >
          <Sissor /> Create Project
        </a>
        <a
          href="/record-video"
          className="inline-flex items-center gap-[5px] border border-1 border-black rounded-[6px] px-[15px] py-[5px] hover:bg-[#ece9e9] hover:rounded-[6px]"
        >
          <VideoCamIcon /> Record Video
        </a>
        <a
          href="/"
          className="inline-flex items-center gap-[5px] border border-1 border-black rounded-[6px] px-[15px] py-[5px] hover:bg-[#ece9e9] hover:rounded-[6px]"
        >
          <Live /> Go Live
        </a>
        <a
          href="/"
          className="inline-flex items-center gap-[5px] border border-1 border-black rounded-[6px] px-[15px] py-[5px] hover:bg-[#ece9e9] hover:rounded-[6px]"
        >
          <Podcast /> Record Podcast
        </a>
      </div>

      <div className="p-[20px]">
        <h2 className="text-[18px] font-[500] pb-[20px]">Recent Videos</h2>
        <div className={`${styles.recentVideoSection} flex gap-[20px]`}>
          {recentVideos.map((title, index) => (
            <div key={index} className={`${styles.recentVideosWrap}`}>
              <div className={`${styles.recentBox}`}>
              <img src={satranga} className="w-full" />
              </div>
              
              <p className="pt-[15px] text-[16px] font-[500]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
