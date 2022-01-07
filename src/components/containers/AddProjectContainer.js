import AddProject from "../views/AddProject";
import TopNav from "../views/navigation/TopNav";

function AddProjectContainer() {
    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12 mt-5 pt-5">
                    <AddProject />
                </div>
            </div>
        </div>
    );
}

export default AddProjectContainer;
