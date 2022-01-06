import { Routes, Route, Navigate } from "react-router-dom";
import classes from "./App.module.css";
import AllocationContainer from "./components/containers/AllocationContainer";
import PeopleContainer from "./components/containers/PeopleContainer";
import ProjectsContainer from "./components/containers/ProjectsContainer";
import "react-toastify/dist/ReactToastify.css";
import IndividualProject from "./components/views/IndividualProject";
import PeopleAddMember from "./components/views/PeopleAddMember";
import AddProject from "./components/views/AddProject";
import AddAllocation from "./components/views/AddAllocation";

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
                <Route path="/people/addMember" element={<PeopleAddMember />} />
                <Route path="/projects/addProject" element={<AddProject />} />
                <Route path="/addAllocation" element={<AddAllocation />} />
            </Routes>
        </div>
    );
};

export default App;
