import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => {

  //  const id = getData().then((data) => {
  //     if (data) {
  //       // do something with the visitor data
  //       // for example, append visitor data to the form data to send to your server
  //       console.log(data.visitorId)
  //       return data.visitorId
  //     }
  //   })


  return (
    <Fragment>
      <Hero />

      <hr />
      <Content />
    </Fragment>
  )
};

export default Home;
