import { APIService } from "../../service/api.service";
import { useState } from "react";
import "../../style/Allocation.css";

const Allocation = () => {
    const arr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const heading = ["Name", "Project", "Allocation", "Revenue"];
    return (
        <div>
            <div className="row basedataheadallocation">
                <div className="col-md-2 headingallocation">Allocation</div>
                <div className="col-md-2">
                    <button className="submitbtn">New Member</button>
                </div>
            </div>
            <div className="row monthrow">
                {arr.map((item) => (
                    <div className="col-md-1 monthbox">
                        <div className="monthitem">{item}</div>
                    </div>
                ))}
            </div>
            <div className="main">
                <div className="row titlerowallocation">
                    {heading.map((item) => (
                        <div className="col-md-2">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Allocation;
