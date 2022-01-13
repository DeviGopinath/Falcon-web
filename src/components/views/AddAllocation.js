import React from "react";
import { APIService } from "../../service/api.service";
import "../../style/AddAlloc.css";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import AlertDialog from "./AlertDialog";

export default function AddAllocation(data) {
    const [people, setPeople] = useState([]);
    const [proj, setProj] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [month, setMonth] = useState();

    const getPeople = () => {
        APIService.peopleApi().then((response) => {
            setPeople(response.data);
        });
    };

    useEffect(() => {
        getPeople();
    }, []);

    const eidArr = [];
    const pidArr = [];

    people.map((item) => {
        var eid = item.eid;
        eidArr.push({ value: eid, label: eid });
        return eidArr;
    });

    proj.map((item) => {
        var pid = item.pid;
        pidArr.push({ value: pid, label: pid });
    });

    const getProjects = (e) => {
        let d = { month: month, eid: e.value };
        APIService.allocatedProjectsApi(d).then((response) => {
            setProj(response.data);
        });
    };

    const months = [
        { value: "Jan", label: "January" },
        { value: "Feb", label: "February" },
        { value: "Mar", label: "March" },
        { value: "Apr", label: "April" },
        { value: "May", label: "May" },
        { value: "Jun", label: "June" },
        { value: "Jul", label: "July" },
        { value: "Aug", label: "August" },
        { value: "Sep", label: "September" },
        { value: "Oct", label: "October" },
        { value: "Nov", label: "November" },
        { value: "Dec", label: "December" },
    ];

    const insertAllocation = (data) => {
        console.log(data);
        APIService.addAllocationApi(data).then((response) => {
            if (response.data.length > 0) {
                setOpen(true);
                setMessage("Allocated successfully!");
                console.log(response.data[0].pid, "response.data.pid");
                const d = { pid: response.data[0].pid };
                APIService.memberCountApi(d).then((response) => {
                    if (response.data.length > 0) {
                        console.log(response.data, "update response");
                        console.log("Count updated");
                    }
                });
            }
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        var data = {
            eid: e.target.eid.value,
            pid: e.target.pid.value,
            rate: e.target.rate.value,
            allocation: e.target.allocation.value,
            month: e.target.month.value,
            revenue: e.target.revenue.value,
        };
        insertAllocation(data);
    };

    return (
        <div className="formwrapper">
            <div className="row headrow">
                <div className="col-md-6 head">
                    {" "}
                    Allocation &gt; Add allocation
                </div>
                {/* <div className="col-md-1">
                    <Link to="/">
                        <button className="backbtn">Back</button>
                    </Link>
                </div> */}
            </div>
            <div>
                <form className="form" onSubmit={handleOnSubmit}>
                    <label className="label">Month:</label>
                    <Select
                        options={months}
                        onChange={(e) => setMonth(e.value)}
                        className="dropdown"
                        name="month"
                    />

                    <label className="label">Employee id:</label>
                    <Select
                        options={eidArr}
                        onChange={(e) => getProjects(e)}
                        className="dropdown"
                        name="eid"
                    />

                    <label className="label">Project id:</label>
                    <Select options={pidArr} className="dropdown" name="pid" />

                    <label className="label">Rate:</label>
                    <input
                        id="rate"
                        type="number"
                        className="textfield"
                        name="rate"
                    />

                    <label className="label">Allocated hours:</label>
                    <input
                        id="allocation"
                        type="number"
                        className="textfield"
                        name="allocation"
                    />

                    <label className="label">Revenue:</label>
                    <input
                        id="revenue"
                        type="number"
                        className="textfield"
                        name="revenue"
                    />
                    <button type="submit" className="subbtn">
                        Submit
                    </button>
                </form>
            </div>
            {open === true && (
                <AlertDialog open={open} message={message} setOpen={setOpen} />
            )}
        </div>
    );
}
