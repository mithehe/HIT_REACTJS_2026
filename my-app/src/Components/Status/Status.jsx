import { useState } from "react";
import "./Status.css";

function Status() {
    const [status, setStatus] = useState(true);

    return (
        <div className={`toggle ${status ? "on" : "off"}`} onClick={() => setStatus(!status)}>
            <span className={`phan ${status ? "left" : "right"}`}>{status ? "ON" : "OFF"}</span>
            <div className="nut"></div>
        </div>
    );

}
export default Status;