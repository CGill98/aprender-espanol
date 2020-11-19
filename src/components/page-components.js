import React, {useState} from 'react'
import style from '../App.module.css';
import DropDownModal from './DropDownModal.js'

const LessonPart = ({title, desc, id}) => {

    console.log(`lp id ${id}`)

    const [kpRetrieved, setkpRetrieved] = useState(false)
    const [keyPoints, setkp] = useState([])

    if (!kpRetrieved) {
        fetch(`http://localhost:3050/keyPoints/${id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit*/
            headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(res => res.json())
        .then(data => {
            setkp(data);
            setkpRetrieved(true);
        }) 
    }

    const [examplesRetrieved, setExamplesRetrieved] = useState(false)
    const [examples, setExamples] = useState([])

    if (!examplesRetrieved) {

        
        fetch(`http://localhost:3050/examples/${id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(res => res.json())
        .then(data => {
            setExamples(data);
            setExamplesRetrieved(true);
        }) 
    }

    return(
    <div>
        <h3>{title}</h3>
        <p>
            {desc}
        </p>
        <h4>Key points</h4>
        <ul>
            {keyPoints.map(kp => {
                return( 
                    <li>
                        {kp.kp_text}
                    </li>);
            })}
        </ul>  
        <h4>Examples</h4>
        <ul>
            {examples.map(ex => {
                return( 
                    <li>
                        {ex.ex_text}
                    </li>);
            })}
        </ul>  
    </div>
    );
}

const Lesson = ({lesson_id}) => {
    const [lessonRetrieved, setLessonRetrieved] = useState(lesson_id)
    const [lessonTitle, setLessonTitle] = useState('')
    const [lessonPartsRetrieved, setLessonPartsRetrieved] = useState(false)
    const [lessonParts, setLessonParts] = useState([])

    const [currentLessonID, setCurrentLessonID] = useState(false)
    if (currentLessonID !== lesson_id) {
        setCurrentLessonID(lesson_id)
        setLessonRetrieved(false)
        setLessonPartsRetrieved(false)
    }

    if (!lessonRetrieved) {
        fetch(`http://localhost:3050/lesson/${lesson_id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit*/
            headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.length === 0) {
                setLessonRetrieved('The title is broken hurray')
            } else {
                setLessonTitle(data[0].title);
            }
            setLessonRetrieved(true);
        })    
        
    }

    if (!lessonPartsRetrieved) {
        fetch(`http://localhost:3050/lessonParts/${lesson_id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit*/
            headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(res => res.json())
        .then(data => {
            
            const lp = data.map(lp => <LessonPart 
                title={lp.title} desc={lp.lp_desc} id={1}/>)

            setLessonParts(lp);
            console.log(lessonParts)
            setLessonPartsRetrieved(true);
        }) 
    }

    return (
        <div>
            <h2 className={style.lesson_name_h2}>
                {lessonTitle}
            </h2>
            {lessonParts}
        </div>
    );
}

const HeaderList = ({courseStateobj}) => {
    const [courses, setCourses] = useState([])
    const [coursesRetrieved, setCoursesRetrieved] = useState(false)
    const [showDD, setShowDD] = useState(false);
    /*
    const DropDownModal = () => {
        return (
        <ul className={style.DropDownModal}>
            <li>Past Tense Spanish</li>
            <li>TWO</li>
            <li>THREE THREE THREE THREE THREE THREE THREE </li>
            <li>FOUR</li>
            <li>FIVE FIVEFIVEFIVEFIVEFIVEFIVEFIVEFIVEFIVE</li>
        </ul>);
    }*/
    
    if (!coursesRetrieved) {
        setCoursesRetrieved(true);
        console.log("fetch get /courses called")
        fetch('http://localhost:3050/courses', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit*/
            headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }).then(res => res.json())
        .then(data => {
            setCourses(data);
        })    
        
    }

    return(
        <ul className={style.header_list}>
            {courses.map((course, index)=> {
                return(<li key={index}
                           onClick={()=>{
                            courseStateobj.setCourseID(course.ID)
                           }}>
                           {course.title}</li>)
            })}

            <li onClick={()=>setShowDD(!showDD)}>More Courses</li>
            {<DropDownModal show={showDD}/>}
        </ul>  )    
}




const Content = ({mobileView, courseID}) => {
    const [currentLesson, setCurrentLesson] = useState(1)

    const SideBar = ({courseID, courseTitle}) => {
        const [courseIDRetrieved, setCourseIDRetrieved] = useState(false)
        const [lessons, setLessons] = useState([])
    
        if (!courseIDRetrieved) {
        
          fetch(`http://localhost:3050/lessons/${courseID}`, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(res => res.json())
              .then(data => {
                setLessons(data)
                setCourseIDRetrieved(true)
              })    
        } 
    
        return(            
        <div id="sidebar" className={style.sidebar}>
            <h3 className={style.sidebar_h3}>
                {courseTitle}
            </h3>
            <ul className={style.sidebar_list}>
            {lessons.map((lesson, index)=> {
                        return(<li key={index} 
                                className={style.list_item}
                                onClick={()=>{
                                    console.log(lesson.ID)
                                    setCurrentLesson(lesson.ID) 
                                }}>
                                    <a className={style.link}>
                                        {lesson.title}
                                    </a>
                                </li>)
                            })}
            </ul>
      </div>)
    } 

 return(
    <div id="content-wrapper" className={style.content_wrapper}>
    {
      !mobileView &&
      <SideBar courseID={courseID} courseTitle={'Introduction to Spanish'}/>
    }
    <div id="main-content" className={style.main_content}>
      <div className={style.main_content_center}>
        <Lesson lesson_id={currentLesson} />
      </div>
    </div>
    <div id="footer" className={style.footer}>
    </div>
  </div>
 )
}

export {LessonPart, Lesson, HeaderList, Content}