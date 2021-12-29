import { useEffect } from "react";
import "../../style/Projects.css";

const IndividualProject = ({ projDetails }) => {
    console.log(projDetails.projname);
    return (
        <div className="base">
            <div className="row basedatahead">
                <div className="col-md-2 heading">
                    Projects &gt; {projDetails[0].projname}
                </div>
                <div className="col-md-2">
                    <button className="submitbtn">New Member</button>
                </div>
            </div>
            <div className="main">
                <div className="row titlerow">
                    <div className="col-md-2">Member</div>
                    <div className="col-md-2">Rate</div>
                    <div className="col-md-3">Emp#</div>
                </div>
            </div>

            {projDetails.map((item) => (
                <div className="main">
                    <div className="row datarow">
                        <div className="col-md-2">{item.name}</div>
                        <div className="col-md-2">{item.rate}</div>
                        <div className="col-md-3">{item.eid}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndividualProject;
