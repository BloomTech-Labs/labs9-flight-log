import React from 'react';
import Parser from 'html-react-parser';
import { Helmet } from 'react-helmet'

export default class SkyVector extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  // <div id="sv_1105" style="width: 200px; height: 200px;">Make your <a href="https://skyvector.com/">Flight Plan</a> at SkyVector.com</div><script src="//skyvector.com/api/lchart?ll=26.51340911507262,-80.74273181955344&amp;s=3&amp;c=sv_1105&amp;i=37" type="text/javascript"></script>

  render() {
    if (this.props.skyVector) {
      const skyVectorSnip = this.props.skyVector;

      let skyVectorDiv = skyVectorSnip.substring(0, skyVectorSnip.indexOf('<script'));

      skyVectorDiv = skyVectorDiv.replace('style="width: 200px; height: 200px;"', `style='width: 100%; height: 150px; margin: 16px auto;'`);

      const skyVectorScript = skyVectorSnip.substring(skyVectorSnip.indexOf('<script'));

      // const script = document.createElement("script");

      // script.src = skyVectorScript;
      // script.async = true;

      // document.body.appendChild(script);

      return (
        <div key={this.props.id}>
          {Parser(skyVectorDiv)}
          <Helmet>{Parser(skyVectorScript)}</Helmet>
        </div>
      );
    } else {
      return null;
    }
  }
}
