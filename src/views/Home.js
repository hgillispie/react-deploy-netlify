import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
const Home = () => {
const {
    isLoading,
    error,
    getData,
    data
  } = useVisitorData();
const id = () => {
  console.log(data.visitorId)
} 
//  const id = getData().then((data) => {
//     if (data) {
//       // do something with the visitor data
//       // for example, append visitor data to the form data to send to your server
//       console.log(data.visitorId)
//       return data.visitorId
//     }
//   })
  if(error){
    return <div>An error occured: {error.message}</div>
  }

  return(
  <Fragment>
    <Hero />

    <hr />
    <Content  />
  </Fragment>
  )
  };

export default Home;
