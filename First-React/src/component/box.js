import React from 'react'


const box = (props) => {
    return (
        <div className="box">
            box {props.num}
            <p>{props.name}</p>
        </div>
    )
}

export default box