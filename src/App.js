import React, {useState} from 'react';
import style from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { LessonPart, Lesson, HeaderList, SideBar, Content} from './components/page-components'

function App() {
  const [mobileView, setMobileView] = useState(window.innerWidth < 500)

  //setMobileView(window.innerWidth < 500)
  window.onresize = () => {
    setMobileView(window.innerWidth < 500)}

  
  const [courseID, setCourseID] = useState(1)
  let courseStateobj = {ID: courseID, setCourseID: setCourseID}

  return (
    <div className={style.body}>
      <div id="header" className={style.header}>
        <div className={style.logo_and_h1}>
          <div className={style.logo_container}>
          </div>
          <h1>
            Aprender Español
          </h1>
        </div>
        <HeaderList courseStateobj={courseStateobj}/>
      </div>
      <Content mobileView={mobileView} courseID={courseStateobj.ID}/>
    </div>
  );
}

export default App;
