import TopNav from "../views/navigation/TopNav";
import IndividualProject from "../views/IndividualProject";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIService } from "../../service/api.service";

function IndividualProjectContainer() {
    const params = useParams();
    const pid = params.pid;
    console.log(pid);

    const [projDetails, setProjDetails] = useState([]);

    const getProjDetails = (pid) => {
        APIService.projectDetailsApi(pid).then((response) => {
            console.log(response.data);
            setProjDetails(response.data);
        });
    };

    useEffect(() => {
        getProjDetails(pid);
    }, []);

    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12">
                    {projDetails.length > 0 ? (
                        <IndividualProject
                            projDetails={projDetails}
                            pid={pid}
                        />
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default IndividualProjectContainer;
