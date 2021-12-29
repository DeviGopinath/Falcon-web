import TopNav from "../views/navigation/TopNav";
import Projects from "../views/Projects";
import { APIService } from "../../service/api.service";
import { useState } from "react";
import IndividualProject from "../views/IndividualProject";

const ProjectsContainer = () => {
    const [projList, setProjList] = useState([]);
    const [projDetails, setProjDetails] = useState([]);

    const getProj = () => {
        APIService.projectsapi().then((response) => {
            setProjList(response.data);
        });
    };

    const getProjDetails = (pid) => {
        APIService.projectdetailsapi(pid).then((response) => {
            console.log(response.data);
            setProjDetails(response.data);
        });
    };

    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12">
                    {projDetails.length > 0 ? (
                        <IndividualProject projDetails={projDetails} />
                    ) : (
                        <Projects
                            proj={projList}
                            getProj={getProj}
                            getProjDetails={getProjDetails}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainer;
