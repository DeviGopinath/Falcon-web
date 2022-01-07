import TopNav from "../views/navigation/TopNav";
import AddAllocation from "../views/AddAllocation";

function AddAllocationContainer() {
    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12 mt-5 pt-5">
                    <AddAllocation />
                </div>
            </div>
        </div>
    );
}

export default AddAllocationContainer;
