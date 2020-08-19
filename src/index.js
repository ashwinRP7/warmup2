import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Imagebox(props){
  return(
    <div className="imageBox">
      {props.imageDetails}
    </div>
  );
}

function TitleBox(props){
  return(
    <div className="titleBox">
      {props.titleDetails}
    </div>
  );
}

function DescBox(props){
  return(
    <div className="descBox">
      {props.descDetails}
    </div>
  );
}

function RightBox(props){
  return(
    <div className="rightBox">
      <TitleBox titleDetails = {props.rightBoxDetails.titleContent}></TitleBox>
      <DescBox descDetails = {props.rightBoxDetails.descContent}></DescBox>
    </div>
  );
}

function OuterBox(props){
  return(
    <div className="outerBox">
      <Imagebox imageDetails = {props.details.imageContent}></Imagebox>
      <RightBox rightBoxDetails = {props.details}></RightBox>
    </div>
  );
}

const content = {
  titleContent:"A Title",
  imageContent:"IMG",
  descContent:"The description goes here.",
};

ReactDOM.render(
  <React.StrictMode>
    <OuterBox details = {content}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
