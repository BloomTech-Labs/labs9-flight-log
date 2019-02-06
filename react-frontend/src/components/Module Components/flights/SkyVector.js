import React from 'react';
import Parser from 'html-react-parser';
import { Helmet } from 'react-helmet';
import ReactSVG from 'react-svg';
export default class SkyVector extends React.Component {

  render() {
    if (this.props.skyVector) {
      const skyVectorSnip = this.props.skyVector;

      let skyVectorDiv = skyVectorSnip.substring(0, skyVectorSnip.indexOf('<script'));

      skyVectorDiv = skyVectorDiv.replace('style="width: 200px; height: 200px;"', `style='width: 100%; height: 150px; margin: 16px auto;'`);

      const skyVectorScript = skyVectorSnip.substring(skyVectorSnip.indexOf('<script'));

      return (
        <div key={this.props.id}>
          {Parser(skyVectorDiv)}
          <Helmet>{Parser(skyVectorScript)}</Helmet>
        </div>
      );
    } else {
      return (
        <div key={this.props.id}>
          <ReactSVG src="./around.svg" svgStyle={{ width: '100%', height: 150, margin: '12px auto' }} />
        </div>
      )
    }
  }
}
