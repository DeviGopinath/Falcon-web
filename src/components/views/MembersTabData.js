import { useEffect } from "react";
import "../../style/Projects.css";

const MembersTabData = ({ members, projDetails }) => {
    console.log(members);
    return (
        <div className="base">
            <div className="main">
                <div className="row titlerow">
                    <div className="col-md-2">Emp#</div>
                    <div className="col-md-2">Rate</div>
                    <div className="col-md-3">Member</div>
                </div>
            </div>

            {projDetails.map((item) => (
                <div className="main">
                    <div className="row datarow">
                        <div className="col-md-2">{item.eid}</div>
                        <div className="col-md-2">{item.rate} SEK</div>
                        <div className="col-md-3">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MembersTabData;
