import React from "react";
import { APIService } from "../../service/api.service";
import "../../style/AddMember.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AlertDialog from "./AlertDialog";

export default function PeopleAddMember() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const insertPeople = (data) => {
        console.log(data.eid, data.ename, data.email);
        APIService.peopleAddMemberApi(data).then((response) => {
            if (response.data.length > 0) {
                setOpen(true);
                setMessage("Member added!");
            }
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        var data = {
            eid: e.target.eid.value,
            ename: e.target.ename.value,
            email: e.target.email.value,
        };
        insertPeople(data);
    };

    return (
        <div className="formwrapper">
            <div className="row headrow">
                <div className="col-md-6 head">People &gt; Add Member</div>
                {/* <div className="col-md-1">
                    <Link to="/people">
                        <button className="backbtn">Back</button>
                    </Link>
                </div> */}
            </div>
            <div>
                <form className="form" onSubmit={handleOnSubmit}>
                    <label className="label">Employee id:</label>
                    <input
                        id="eid"
                        type="number"
                        name="eid"
                        className="textfield"
                    />
                    <label className="label">Name:</label>
                    <input
                        id="ename"
                        autoComplete="off"
                        type="text"
                        className="textfield"
                        name="ename"
                    />
                    <label className="label">Email:</label>
                    <input
                        id="email"
                        type="text"
                        autoComplete="off"
                        className="textfield"
                        name="email"
                    />
                    {/* <Link to="/people"> */}
                    <button type="submit" className="subbtn">
                        Submit
                    </button>
                    {/* </Link> */}
                </form>
            </div>
            {open === true && (
                <AlertDialog open={open} message={message} setOpen={setOpen} />
            )}
        </div>
    );
}
