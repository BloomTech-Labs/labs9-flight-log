import React from 'react';
import {Helmet} from "react-helmet";

export default (props) => {
  console.log(props);
  const svstyle = {width: 180, height: 180, margin: '0 auto'}


  return (
    <div>
      <div id="sv_4575" style={svstyle}>Make your <a href="https://skyvector.com/">Flight Plan</a> at SkyVector.com</div>
      <Helmet>
        <script src="//skyvector.com/api/lchart?ll=26.35384109528724,-80.30948881986374&amp;s=5&amp;c=sv_7023&amp;i=37" type="text/javascript"></script>
        <script src="//skyvector.com/api/lchart?ll=26.51340911507262,-80.74273181955344&amp;s=3&amp;c=sv_4575&amp;i=37" type="text/javascript"></script>
      </Helmet>
    </div>)
  
}

