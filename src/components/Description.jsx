import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

const Description = () => {
  const { dataInfos } = useParams();
  // console.log(dataInfos);
  let movieInfos = data.find((dataInfo) => dataInfo.title.includes(dataInfos));
  // console.log(data, "eeeee");

  let { title, trailer } = movieInfos;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <iframe
          width="560"
          height="315"
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Link to="/">Home page</Link>
    </>
  );
};

export default Description;
