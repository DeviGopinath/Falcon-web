import Allocation from "../views/Allocation";
import TopNav from "../views/navigation/TopNav";

const AllocationContainer = () => {
    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-10 mt-5 pt-5">
                    <Allocation />
                </div>
            </div>
        </div>
    );
};

export default AllocationContainer;
