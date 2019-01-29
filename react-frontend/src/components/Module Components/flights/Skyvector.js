import React from 'react';
import { Helmet } from "react-helmet";

export default ({ skyVector }) => {
  const svstyle = { width: 180, height: 180, margin: '0 auto' }

  const skyVectorSnip = skyVector;

  let skyVectorDiv = skyVectorSnip.substring(0, skyVectorSnip.indexOf("<script"));

  skyVectorDiv = skyVectorDiv.replace('style="width: 200px; height: 200px;"', `style=` + svstyle + `"`);



  const skyVectorScript = skyVectorSnip.substring(
    skyVectorSnip.indexOf("<script")
  );

  console.log(skyVectorDiv);
  console.log(JSON.stringify(skyVectorScript));
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: skyVectorDiv }} />
      <Helmet>
        {JSON.stringify(skyVectorScript)}
      </Helmet>
    </div>
  );
}
