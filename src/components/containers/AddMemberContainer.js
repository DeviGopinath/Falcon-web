import PeopleAddMember from "../views/PeopleAddMember";
import TopNav from "../views/navigation/TopNav";

function AddMemberContainer() {
    return (
        <div>
            <TopNav />
            <div className="row">
                <div className="col-md-12 mt-5 pt-5">
                    <PeopleAddMember />
                </div>
            </div>
        </div>
    );
}

export default AddMemberContainer;
