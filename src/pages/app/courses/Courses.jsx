import React from "react";
import style from "./Courses.module.css";
import Card from "../../../components/card";
import coursesData from "../../../data/courses.json";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
        <h4>Choose your Katana ⚔️</h4>
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
          return (
            <div
              onClick={() => handleClick(course.id)}
              key={index}
              className={style.card_container}
            >
              <Card
                key={course.id}
                id={course.id}
                title={course.title}
                img={course.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
