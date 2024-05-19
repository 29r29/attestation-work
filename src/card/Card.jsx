import React from "react";
import classes from './Card.module.css';
const Card = ({title, price, image, description, count,}) => {
    return (
        <div className={classes.card}>
            <span className={classes.tpc}> {title}</span>
            <img src={image} alt="" className={classes.img}/>
            <span className={classes.tpc}>Price: {price}</span>
            <span className={classes.tpc}>Count: {count}</span>
            <span className={classes.desc}>{description}</span>
        </div>
    )
}

export default Card;