import { useEffect } from "react";
import "../../style/Projects.css";
import { Link } from "react-router-dom";

const People = ({ getProjDetails, getProj, projList }) => {
    useEffect(() => {
        getProj();
    }, []);

    console.log(projList);

    return (
        <div className="base">
            <div className="row basedatahead">
                <div className="col-md-2 heading">Projects</div>
                <div className="col-md-2">
                    <button className="submitbtn">New Project</button>
                </div>
            </div>
            <div className="main">
                <div className="row titlerow">
                    <div className="col-md-2">Project</div>
                    <div className="col-md-2">Client</div>
                    <div className="col-md-3">Estimated Effort</div>
                    <div className="col-md-2">Budget</div>
                    <div className="col-md-2">Member Count</div>
                </div>
            </div>

            {projList.map((item) => (
                <div className="main">
                    <div
                        className="row datarow"
                        onClick={() => getProjDetails(item.pid)}
                    >
                        <div className="col-md-2">{item.name}</div>
                        <div className="col-md-2">{item.client}</div>
                        <div className="col-md-3">{item.estimation}</div>
                        <div className="col-md-2">{item.budget}</div>
                        <div className="col-md-2">{item.members}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default People;
