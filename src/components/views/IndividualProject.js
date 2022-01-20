import { useState } from "react";
import "../../style/Projects.css";
import { Link } from "react-router-dom";
import MembersTabData from "./MembersTabData";
import AllocationTabData from "./AllocationTabData";
import RevenueTabData from "./RevenueTabData";

const IndividualProject = (props) => {
    const projDetails = props.projDetails;
    const projectname = props.projectname;
    const revalloc = props.revalloc;
    const pid = props.pid;
    console.log(projDetails, pid);

    const [isActive, setActive] = useState([true, false, false]);
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
                <div className="col-md-3 heading">
                    <span>
                        <Link className="span" to="/projects">
                            Projects
                        </Link>
                    </span>{" "}
                    &gt; {projectname}
                </div>
                <div className="col-md-2">
                    <Link to={`/projects/${projectname}/${pid}/addmember`}>
                        <button className="submitbtn">Add Member</button>
                    </Link>
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
                        type="button"
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

            {isActive[1] === true ? (
                <AllocationTabData revalloc={revalloc} />
            ) : (
                <div> </div>
            )}

            {isActive[2] === true ? (
                <RevenueTabData revalloc={revalloc} />
            ) : (
                <div> </div>
            )}
        </div>
    );
};

export default IndividualProject;
