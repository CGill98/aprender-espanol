import React from 'react'
import style from '../App.module.css';

const Catergory = () => {
    return (
    <div className={style.catergory}>
        <h2>Global Spanish</h2>
        <ul className={style.catergoryList}>
            <li>Spain</li>
            <li>Mexico</li>
            <li>Argentina</li>
            <li>Columbia</li>
            <li>Peru</li>
        </ul>
    </div>
    )
}

const DropDownModal = ({show}) => {
    return (
    <div className={show ? style.DropDownModal : style.DropDownModalGone}>
        {show &&
        <>
            <Catergory/>
            <Catergory/>
            <Catergory/>
            <Catergory/>
        </>}
    </div>);
}

export default DropDownModal