import { useEffect } from "react";
import "../../style/People.css";

const People = ({ apicall, emp }) => {
    useEffect(() => {
        apicall();
    }, []);

    console.log(emp);

    return (
        <div className="base">
            <div className="row basedatahead">
                <div className="col-md-2 heading">People</div>
                <div className="col-md-2">
                    <button className="submitbtn">New Member</button>
                </div>
            </div>
            <div className="main">
                <div className="row titlerow">
                    <div className="col-md-3">Emp#</div>
                    <div className="col-md-5">Name</div>
                    <div className="col-md-2">Email</div>
                </div>
            </div>

            {emp.map((item) => (
                <div className="main">
                    <div className="row datarow">
                        <div className="col-md-3">{item.eid}</div>
                        <div className="col-md-5">{item.name}</div>
                        <div className="col-md-2">{item.email}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default People;
