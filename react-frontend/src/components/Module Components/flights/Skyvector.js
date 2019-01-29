import React from 'react';
import { Helmet } from "react-helmet";

export default (props) => {
  console.log(props);
  const svstyle = { width: 180, height: 180, margin: '0 auto' }

  const skyVectorSnip = props.SkyVector;

  const skyVectorDiv = skyVectorSnip.substring(
    0,
    skyVectorSnip.indexOf("<script")
  );
  const regex = /style=[\w\d\s\: \; \"]*/gi;
  skyVectorDiv.replace(regex, "style={svstyle}");

  const skyVectorScript = skyVectorSnip.substring(
    skyVectorSnip.indexOf("<script")
  );

  return (
    <div>
      SkyVector
      {skyVectorDiv}
      <Helmet>
        {skyVectorScript}
      </Helmet>
    </div>
  );
}

