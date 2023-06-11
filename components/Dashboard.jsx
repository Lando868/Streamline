'use client';

import { useState, useEffect } from 'react';
import '@styles/global.css';
import '@styles/dashboard.css';


const submitComment = (e) => {
    e.preventDefault();
    console.log("Comment submitted!");
}


const Dashboard = () => {
    return (
        <div>
            <div className="dash-overall">
                <div className="dash-header">
                    <h1 className='site-title'>UREA PLANT</h1>
                    <p>ON SHIFT: </p>
                    <div className="time">
                        <p>9</p>
                        <p>:</p>
                        <p>35</p>
                        <p>AM</p>
                    </div>


                </div>
                <div className="dash-entry">
                    <form className="comment-entry-form" onSubmit={submitComment}>
                        <input type="text" />
                        <input type="text" />
                        <button type="submit" className='btn comment-btn'>Submit comment</button>
                    </form>

                </div>
                <div className="dash-kpi">

                </div>


            </div>
        </div>
    )
}

export default Dashboard;