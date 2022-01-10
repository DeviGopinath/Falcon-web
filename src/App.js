import { Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import AllocationContainer from "./components/containers/AllocationContainer";
import PeopleContainer from "./components/containers/PeopleContainer";
import ProjectsContainer from "./components/containers/ProjectsContainer";
import "react-toastify/dist/ReactToastify.css";
import IndividualProject from "./components/views/IndividualProject";
import AddMemberContainer from "./components/containers/AddMemberContainer";
import AddProjectContainer from "./components/containers/AddProjectContainer";
import AddAllocationContainer from "./components/containers/AddAllocationContainer";

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
                <Route
                    path="/people/addMember"
                    element={<AddMemberContainer />}
                />
                <Route
                    path="/projects/addProject"
                    element={<AddProjectContainer />}
                />
                <Route
                    path="/addAllocation"
                    element={<AddAllocationContainer />}
                />
            </Routes>
        </div>
    );
};

export default App;
