import React from 'react'
import './ServerCards.css'

export default function ServerCards() {
    return (
        <div className='cardRoot'>
            <h2>Vincent</h2>
            

            <div className="dropdown">
            <button className="dropbtn">Section</button>
            <div className="dropdown-content">
                <a href="#">section 1</a>
                <a href="#">section 2</a>
                <a href="#">section 3</a>
            </div>
            </div>
            <div className="dropdown">
            <button className="dropbtn">Tables</button>
            <div className="dropdown-content">
                <a href="#">Table 1</a>
                <a href="#">Table 1</a>
                <a href="#">Table 1</a>
            </div>
            </div>
        </div>
    )
}
