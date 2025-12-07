import React from 'react'


function Logo({width, className}) {
    console.log(className)
    return (
        <div className={className} style={{fontFamily:"MyCustomFont"}}>
            BlogHouse
        </div>
    )
}

export default Logo