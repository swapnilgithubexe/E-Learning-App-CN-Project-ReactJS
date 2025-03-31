import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Outlet, useNavigate, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const navigate = useNavigate();
  const { id } = useParams();
  const matchedCourse = coursesData.find((item) => item.id.toString() === id);
  // console.log("Matched Course:", matchedCourse);

  // if (!matchedCourse) {
  //   return <h2>Course Not Found</h2>;
  // }

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 onClick={() => navigate("/courses")} className={style.back}>
          {"<<"}
        </h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{matchedCourse.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {matchedCourse.chapters.map((chapter, i) => {
              return (
                <div
                  style={{ cursor: "pointer", marginBottom: "5px" }}
                  onClick={() => navigate(`${chapter.chapter}`)}
                  key={i}
                >
                  {chapter.title}
                </div>
              );
            })}
          </ul>
        </div>

        <div>
          {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet context={{ ...matchedCourse }} />
        </div>
      </div>
    </div>
  );
}

export default Learn;
