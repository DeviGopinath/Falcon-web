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
            setAllocationList(response.data);
        });
    };
    return (
        <div>
            <div className="row basedataheadallocation">
                <div className="col-md-2 headingallocation">Allocation</div>
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
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Working days</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Allocated hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Billable hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvaluebillable">VALUE</div>
                    <div className="summaryitembillable">
                        Billable utilisation
                    </div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Revenue</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Active Projects</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem ">Members</div>
                </div>
            </div>
            <div className="maincont">
                <div className="row titlerowallocation">
                    <div className="col-md-3">Name</div>
                    <div className="col-md-3">Project</div>
                    <div className="col-md-3">Allocation</div>
                    <div className="col-md-3">Revenue</div>
                </div>
                <AllocationDisplay allocationList={allocationList} />
            </div>
        </div>
    );
};

export default Allocation;
