import { useState } from "react";
import "../../style/Projects.css";
import MembersTabData from "./MembersTabData";
import AllocationTabData from "./AllocationTabData";
import RevenueTabData from "./RevenueTabData";

const IndividualProject = ({ projDetails }) => {
    // console.log(projDetails);

    const [isActive, setActive] = useState([false, false, false]);
    const navArr = ["Members", "Allocation", "Revenue"];

    console.log(isActive);

    const setSelectMembers = (ind) => {
        console.log(isActive[ind], ind);
        const temp = isActive;
        temp.map((i, j) => {
            if (j === ind) {
                temp[j] = true;
            } else {
                temp[j] = false;
            }
        });
        setActive([...temp]);
        console.log(isActive[ind], ind);
        console.log(isActive);
    };

    return (
        <div className="base">
            <div className="row basedatahead">
                <div className="col-md-4 heading">
                    Projects &gt; {projDetails[0].projname}
                </div>
            </div>
            <div className="summaryrowindproj">
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">VALUE</div>
                    <div className="summaryitemindproj">Planned scope</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">VALUE</div>
                    <div className="summaryitemindproj">Allocation</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">VALUE</div>
                    <div className="summaryitemindproj">Spent</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvaluebillable">VALUE</div>
                    <div className="summaryitembillable">
                        Billable utilisation
                    </div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">VALUE</div>
                    <div className="summaryitemindproj">Revenue</div>
                </div>
            </div>
            <ul className="navtab">
                {navArr.map((item, ind) => (
                    <li
                        className={isActive[ind] ? "active" : "idle"}
                        onClick={() => setSelectMembers(ind)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {isActive[0] === true ? (
                <MembersTabData projDetails={projDetails} />
            ) : (
                <div />
            )}

            {isActive[1] === true ? <AllocationTabData /> : <div> </div>}

            {isActive[2] === true ? <RevenueTabData /> : <div> </div>}
        </div>
    );
};

export default IndividualProject;
