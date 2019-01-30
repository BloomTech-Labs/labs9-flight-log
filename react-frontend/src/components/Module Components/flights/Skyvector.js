import React from 'react';
import ReactHtmlParser, { htmlparser2 } from 'react-html-parser';
import Helmet from 'react-helmet'

export default class SkyVector extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const skyVectorSnip = this.props.skyVector;

    let skyVectorDiv = skyVectorSnip.substring(0, skyVectorSnip.indexOf('<script'));

    skyVectorDiv = skyVectorDiv.replace('style="width: 200px; height: 200px;"', `style='width: 200px; height: 200px; margin: 0 auto;'`);

    const skyVectorScript = skyVectorSnip.substring(skyVectorSnip.indexOf('<script'));

    // const script = document.createElement("script");

    // script.src = skyVectorScript;
    // script.async = true;

    // document.body.appendChild(script);

    return (
      <div key={this.props.id} dangerouslySetInnerHTML={{ __html: skyVectorDiv + skyVectorScript }} />
    );
  }
}
