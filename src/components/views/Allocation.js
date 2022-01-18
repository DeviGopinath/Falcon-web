import { APIService } from "../../service/api.service";
import { useState, useEffect } from "react";
import "../../style/Allocation.css";
import AllocationDisplay from "./AllocationDisplay";
import { Link } from "react-router-dom";

const Allocation = () => {
    useEffect(() => {
        defaultMonth();
    }, []);

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
    const [isActive, setActive] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [defMonth, setDefMonth] = useState();
    const [activeProjects, setActiveProjects] = useState({});
    const [totalMembers, setTotalMembers] = useState();

    const defaultMonth = () => {
        const d = new Date();
        let a = d.getMonth();
        let m = parseInt(a);
        setDefMonth(arr[m]);
        handleMonthClick(arr[m], m);
    };

    const handleMonthClick = (item, ind) => {
        console.log(item);
        const temp = isActive;
        console.log(ind);
        temp.map((i, j) => {
            if (j === ind) {
                temp[j] = true;
                console.log(j);
            } else {
                temp[j] = false;
            }
        });
        setActive([...temp]);
        APIService.allocationApi(item).then((response) => {
            console.log(response.data);
            setAllocationList([...response.data]);
        });
        APIService.activeProjectsApi(item).then((response) => {
            console.log(response.data[0]);
            setActiveProjects(response.data[0]);
        });
        APIService.totalMembersApi(item).then((response) => {
            console.log(response.data[0]);
            setTotalMembers(response.data[0].count);
        });
    };

    console.log(allocationList);

    // useEffect(() => {
    //     console.log(activemonth);
    // }, [activemonth]);

    return (
        <div>
            <div className="row basedataheadallocation">
                <div className="col-md-2 headingallocation">Allocation</div>
                <div className="col-md-2">
                    <Link to="/addAllocation">
                        <button className="submitbtn">Add Allocation</button>
                    </Link>
                </div>
            </div>
            <div className="monthrow">
                {arr.map((item, ind) => (
                    <div
                        className="monthbox"
                        className={
                            isActive[ind] ? "activemonthbox" : "monthbox"
                        }
                        onClick={() => handleMonthClick(item, ind)}
                    >
                        <div className="monthitem">{item}</div>
                    </div>
                ))}
            </div>
            <AllocationDisplay
                allocationList={allocationList}
                activeProjects={activeProjects}
                totalMembers={totalMembers}
            />
        </div>
    );
};

export default Allocation;
