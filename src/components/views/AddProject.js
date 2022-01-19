import React from "react";
import { APIService } from "../../service/api.service";
import "../../style/AddMember.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AlertDialog from "./AlertDialog";
import { Link } from "react-router-dom";

export default function AddProject() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const insertProject = (data) => {
        console.log(data);
        APIService.addProjectApi(data).then((response) => {
            if (response.data.length > 0) {
                setOpen(true);
                setMessage("Project added!");
            }
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        var data = {
            pid: e.target.pid.value,
            pname: e.target.pname.value,
            client: e.target.client.value,
            estimation: e.target.estimation.value,
            budget: e.target.budget.value,
        };
        insertProject(data);
    };

    return (
        <div className="formwrapper">
            <div className="row headrow">
                <div className="col-md-6 head">
                    <span>
                        <Link className="span" to="/projects">
                            Projects
                        </Link>
                    </span>{" "}
                    &gt; Add Project
                </div>
            </div>
            <div>
                <form className="form" onSubmit={handleOnSubmit}>
                    <label className="label">Project id:</label>
                    <input
                        id="pid"
                        type="number"
                        autoComplete="off"
                        name="pid"
                        className="field"
                    />
                    <label className="label">Name:</label>
                    <input
                        id="pname"
                        autoComplete="off"
                        type="text"
                        className="field"
                        name="pname"
                    />
                    <label className="label">Client:</label>
                    <input
                        id="client"
                        type="text"
                        autoComplete="off"
                        className="field"
                        name="client"
                    />
                    <label className="label">Estimated Effort:</label>
                    <input
                        id="estimation"
                        type="number"
                        autoComplete="off"
                        className="field"
                        name="estimation"
                    />
                    <label className="label">Budget:</label>
                    <input
                        id="budget"
                        type="number"
                        autoComplete="off"
                        className="field"
                        name="budget"
                    />
                    {/* <label className="label">Members:</label>
                    <input
                        id="members"
                        type="number"
                        className="field"
                        name="members"
                    /> */}
                    {/* <Link to="/projects"> */}
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
