import React from "react";
import { APIService } from "../../service/api.service";
import "../../style/AddAlloc.css";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import AlertDialog from "./AlertDialog";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddAllocation(data) {
    const params = useParams();
    const name = params.projectname;
    const pid = params.pid;
    console.log(name, pid);

    const [people, setPeople] = useState([]);
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

    people.map((item) => {
        var eid = item.eid;
        eidArr.push({ value: eid, label: eid });
        return eidArr;
    });

    const handleSelectMonth = (e) => {
        setMonth(e.value);
        var d = { month: e.value, pid: pid };
        console.log(d);
        APIService.unallocatedPeopleApi(d).then((response) => {
            setPeople(response.data);
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
        var data = {
            month: e.target.month.value,
            eid: e.target.eid.value,
            pid: pid,
            rate: e.target.rate.value,
            allocation: e.target.allocation.value,
            revenue: e.target.allocation.value * e.target.rate.value,
        };
        console.log(data);
        insertAllocation(data);
    };

    return (
        <div className="formwrapper">
            <div className="row headrow">
                <div className="col-md-6 head">
                    {" "}
                    <span>
                        <Link className="span" to={`/projects/${name}/${pid}`}>
                            {name}
                        </Link>
                    </span>{" "}
                    &gt; Add Member
                </div>
            </div>
            <div>
                <form className="form" onSubmit={handleOnSubmit}>
                    <label className="label">Month:</label>
                    <Select
                        options={months}
                        onChange={(e) => handleSelectMonth(e)}
                        //onChange={(e) => setMonth(e.value)}
                        className="dropdown"
                        name="month"
                    />

                    <label className="label">Employee id:</label>
                    <Select options={eidArr} className="dropdown" name="eid" />

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
