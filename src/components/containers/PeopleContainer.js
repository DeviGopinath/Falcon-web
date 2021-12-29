import TopNav from "../views/navigation/TopNav";
import People from "../views/People";
import { APIService } from "../../service/api.service";
import { useState } from "react";

const PeopleContainer = () => {
    const [empList, setEmpList] = useState([]);

    const getEmp = () => {
        APIService.peopleApi().then((response) => {
            console.log(response.data);
            setEmpList(response.data);
        });
    };
    //console.log(empList);
    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12">
                    <People emp={empList} apicall={getEmp} />
                </div>
            </div>
        </div>
    );
};

export default PeopleContainer;
