import { Routes, Route, Navigate } from "react-router-dom";
import classes from "./App.module.css";
import AllocationContainer from "./components/containers/AllocationContainer";
import PeopleContainer from "./components/containers/PeopleContainer";
import ProjectsContainer from "./components/containers/ProjectsContainer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allocation from "./components/views/Allocation";
import IndividualProject from "./components/views/IndividualProject";

const App = () => {
    return (
        <div className={classes.App}>
            <Routes>
                <Route path="/" element={<AllocationContainer />} />
                <Route path="/projects" element={<ProjectsContainer />} />
                <Route path="/people" element={<PeopleContainer />} />
                <Route
                    path="/projects/individualproject"
                    element={<IndividualProject />}
                />
            </Routes>
        </div>
    );
};

export default App;
