import { useState } from "react";
import "../../style/Projects.css";
import MembersTabData from "./MembersTabData";

const IndividualProject = ({ projDetails }) => {
    console.log(projDetails);

    const [members, selectMembers] = useState(false);

    const setSelectMembers = () => {
        selectMembers(true);
    };
    console.log(members);
    return (
        <div className="base">
            <div className="row basedatahead">
                <div className="col-md-4 heading">
                    Projects &gt; {projDetails[0].projname}
                </div>
                {/* <div className="col-md-2">
                    <Link to="/projects/addallocation">
                        <button className="submitbtn">Add Allocation</button>
                    </Link>
                </div> */}
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
                <li onClick={() => setSelectMembers()}>Members</li>
                <li>Allocation</li>
                <li>Revenue</li>
            </ul>
            {members === true ? (
                <MembersTabData projDetails={projDetails} />
            ) : (
                <div> </div>
            )}
            {/* {members == "true"(<MembersTabData projDetails={projDetails} />)} */}
        </div>
    );
};

export default IndividualProject;
