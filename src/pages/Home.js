import React from 'react'
import './Home.css'
import Rose from '../components/Rose'
import Chocolate from '../components/Chocolate'
import Propose from '../components/Propose'
import { useNavigate } from 'react-router-dom'
import Teddy from '../components/Teddy'
import Hug from '../components/Hug'
import Promises from '../components/Promises'

export default function Home() {
    let navigate = useNavigate();

    return (
        <div className='days'>
            <div className="day" onClick={e => navigate("/RoseDay")}>
                <Rose />
                <h3>Rose Day</h3>
            </div>
            <div className="day" onClick={e => navigate("/ProposeDay")}>
                <Propose />
                <h3>Propose Day</h3>
            </div>
            <div className="day" onClick={e => navigate("/ChocolateDay")}>
                <Chocolate />
                <h3>Chocolate Day</h3>
            </div>
            <div className="day" onClick={e => navigate("/TeddyDay")}>
                <Teddy />
                <h3>Teddy Day</h3>
            </div>
            <div className="day" onClick={e => navigate("/PromiseDay")}>
                <Promises />
                <h3>Promise Day</h3>
            </div>
            <div className="day" onClick={e => navigate("/HugDay")}>
                <Hug />
                <h3>Hug Day</h3>
            </div>
        </div>
    )
}
