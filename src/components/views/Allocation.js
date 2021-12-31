import { APIService } from "../../service/api.service";
import { useState } from "react";
import "../../style/Allocation.css";
import AllocationDisplay from "./AllocationDisplay";

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

    const [allocationList, setAllocationList] = useState([]);

    const handleMonthClick = (item) => {
        console.log(item);
        APIService.allocationApi(item).then((response) => {
            console.log(response.data);
            setAllocationList(response.data);
        });
    };
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
                    <div
                        className="col-md-1 monthbox"
                        onClick={() => handleMonthClick(item)}
                    >
                        <div className="monthitem">{item}</div>
                    </div>
                ))}
            </div>
            <div className="summaryrowallocation">
                <div className="summaryboxallocation">
                    <div className="summaryvalue">21</div>
                    <div className="summaryitem">Working days</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">1520</div>
                    <div className="summaryitem">Allocated hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">1360</div>
                    <div className="summaryitem">Billable hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvaluebillable">81%</div>
                    <div className="summaryitembillable">
                        Billable utilisation
                    </div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">1.23 MSEK</div>
                    <div className="summaryitem">Revenue</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">6</div>
                    <div className="summaryitem">Active Projects</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">10</div>
                    <div className="summaryitem ">Members</div>
                </div>
            </div>
            <div className="main">
                <div className="row titlerowallocation">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-2">Project</div>
                    <div className="col-md-2">Allocation</div>
                    <div className="col-md-2">Revenue</div>
                </div>
                <AllocationDisplay allocationList={allocationList} />
            </div>
        </div>
    );
};

export default Allocation;
