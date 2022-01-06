import React from "react";
import { APIService } from "../../service/api.service";
import "../../style/AddMember.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PeopleAddMember() {
    const insertProject = (data) => {
        console.log(data);
        APIService.addProjectApi(data).then((response) => {
            if (response.data.length > 0) {
                toast.success("Inserted");
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
            members: e.target.members.value,
        };
        insertProject(data);
    };

    return (
        <div className="formwrapper">
            <div className="row headrow">
                <div className="col-md-6 head">Projects &gt; Add Project</div>
                <div className="col-md-1">
                    <Link to="/projects">
                        <button className="backbtn">Back</button>
                    </Link>
                </div>
            </div>
            <div>
                <form className="form" onSubmit={handleOnSubmit}>
                    <label className="label">Project id:</label>
                    <input
                        id="pid"
                        type="number"
                        name="pid"
                        className="field"
                    />
                    <label className="label">Name:</label>
                    <input
                        id="pname"
                        type="text"
                        className="field"
                        name="pname"
                    />
                    <label className="label">Client:</label>
                    <input
                        id="client"
                        type="text"
                        className="field"
                        name="client"
                    />
                    <label className="label">Estimated Effort:</label>
                    <input
                        id="estimation"
                        type="number"
                        className="field"
                        name="estimation"
                    />
                    <label className="label">Budget:</label>
                    <input
                        id="budget"
                        type="number"
                        className="field"
                        name="budget"
                    />
                    <label className="label">Members:</label>
                    <input
                        id="members"
                        type="number"
                        className="field"
                        name="members"
                    />
                    <button type="submit" className="subbtn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
