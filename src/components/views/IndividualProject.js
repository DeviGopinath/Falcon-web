import { useState } from "react";
import "../../style/Projects.css";
import MembersTabData from "./MembersTabData";

const IndividualProject = ({ projDetails }) => {
    console.log(projDetails);

    const [members, selectMembers] = useState(false);

    const setSelectMembers = (data) => {
        if (data == true) {
            selectMembers(data);
        }
    };
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
            <div className="summaryrowindproj">
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">1360</div>
                    <div className="summaryitemindproj">Planned scope</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">1360</div>
                    <div className="summaryitemindproj">Allocation</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">1360</div>
                    <div className="summaryitemindproj">Spent</div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvaluebillable">81%</div>
                    <div className="summaryitembillable">
                        Billable utilisation
                    </div>
                </div>
                <div className="summaryboxindproj">
                    <div className="summaryvalueindproj">1.23 MSEK</div>
                    <div className="summaryitemindproj">Revenue</div>
                </div>
            </div>
            <ul className="navtab">
                <li onClick={() => setSelectMembers(true)}>
                    <a>Members</a>
                </li>
                <li>
                    <a>Allocation</a>
                </li>
                <li>
                    <a>Revenue</a>
                </li>
            </ul>
            <MembersTabData members={members} projDetails={projDetails} />
        </div>
    );
};

export default IndividualProject;
