import React from 'react'
import './ServerCards.css'

export default function ServerCards() {
    return (
        <div className='cardRoot'>
            <h2>Vincent</h2>
            

            <div class="dropdown">
            <button class="dropbtn">Section</button>
            <div class="dropdown-content">
                <a href="#">section 1</a>
                <a href="#">section 2</a>
                <a href="#">section 3</a>
            </div>
            </div>
            <div class="dropdown">
            <button class="dropbtn">Tables</button>
            <div class="dropdown-content">
                <a href="#">Table 1</a>
                <a href="#">Table 1</a>
                <a href="#">Table 1</a>
            </div>
            </div>
        </div>
    )
}
