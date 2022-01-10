import "../../style/Projects.css";

const MembersTabData = ({ projDetails }) => {
    console.log(projDetails);
    return (
        <div className="baseindproj">
            <div className="main">
                <div className="row btnrow"></div>
                <div className="row titlerow">
                    <div className="col-md-2">Emp#</div>
                    <div className="col-md-2">Member</div>
                    <div className="col-md-3">Rate</div>
                </div>
            </div>

            {projDetails.map((item) => (
                <div className="main">
                    <div className="row datarow">
                        <div className="col-md-2">{item.eid}</div>
                        <div className="col-md-2">{item.name}</div>
                        <div className="col-md-3">{item.rate} SEK</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MembersTabData;
