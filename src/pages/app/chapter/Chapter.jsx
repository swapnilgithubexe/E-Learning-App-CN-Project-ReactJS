import React from "react";
import styles from "./Chapter.module.css";
// import coursesData from "../../../data/courses.json";
import { useParams, useOutletContext } from "react-router-dom";

function Chapter() {
  const { chapterId } = useParams();

  // const matchedCourse = coursesData.find((item) => item.id === id);
  // console.log(matchedCourse);

  // if (!matchedCourse) {
  //   return <h2>Course Not Found</h2>;
  // }
  const matchedCourse = useOutletContext();

  const chapter = matchedCourse.chapters.find(
    (c) => c.chapter.toString() === chapterId
  );
  // console.log(chapter);

  if (!chapter) {
    return <h2>Chapter not found</h2>;
  }

  return (
    <div>
      <h1>{chapter.title}</h1>
      <hr />
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
