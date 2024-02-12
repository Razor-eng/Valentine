import { Link } from 'react-router-dom'
import './RoseDay.css'

const RoseDay = () => {
    return (
        <div>
            <div className="rosecontainer">
                <div className="glass">
                    <div className="shine"></div>
                </div>
                <div className="thorns">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="leaves">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="petals">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text">
                    <h2> Your smile is as beautiful as Rose <br />
                        I have Something For your Smile : <Link to={"/RoseDayNew"}>Click Here</Link></h2>
                </div>
            </div >
        </div>
    )
}

export default RoseDay
