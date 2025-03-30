import React from "react";
import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { Outlet, useNavigate, useParams } from "react-router-dom";
//Third task: import useParams hook

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();

  const matchedCourse = coursesData.find((data) => data.id === id);

  return (
    //Third Task: get course id and match it with the data
    <>
      <div className={style.courses_container}>
        <div className={style.card_container}>
          <div className={style.card_image}>
            <div className={style.image_container}>
              {/*Third task: image source here */}
              <img src={matchedCourse.img} alt="icons" />
            </div>
          </div>
          <div className={style.card_content}>
            {/*Third Task:  Title and Description here */}
            <h1 className={style.card_title}>{matchedCourse.title}</h1>
            <p className={style.card_description}>
              {matchedCourse.description}
            </p>
          </div>
        </div>
        {/* Task4: create Link to the Learn Page */}
        <button
          onClick={() => navigate(`/learn/${id}`)}
          className={style.button}
        >
          Start Learning
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Details;
