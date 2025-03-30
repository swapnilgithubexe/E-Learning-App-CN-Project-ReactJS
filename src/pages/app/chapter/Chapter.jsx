import React from "react";
import styles from "./Chapter.module.css";
import coursesData from "../../../data/courses.json";
import { Outlet, useParams } from "react-router-dom";

function Chapter() {
  const { id, content } = useParams();
  const matchedCourse = coursesData.find((item) => item.id === id);
  const chapter = matchedCourse.chapters.find(
    (c) => c.title.toLocaleLowerCase() === content.toLowerCase()
  );

  return (
    <>
      <div>
        <h1>{chapter.title}</h1>
        <h2>{chapter.description}</h2>
        <p className={styles.para}>{chapter.details}</p>
        <br />
        <br />
        <div className={styles.videos}>
          {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
          <iframe
            width="800"
            height="560"
            src=""
            title="React Video"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Chapter;
