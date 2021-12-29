import "../../../style/TopNav.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import icon from "../../../images/falconlogo.png";

const TopNav = () => {
    const arr = ["Allocation", "Projects", "People"];
    return (
        <div className="row headbox">
            <div className="col-md-2 icon">
                <img src={icon} alt="falconlogo"></img>
                <span>FALCON</span>
            </div>
            <div className="col-md-9 ulist">
                <ul className="ulist">
                    <li>
                        <Link className="link" to="/">
                            <a href name="Allocation">
                                Allocation
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/projects">
                            <a href name="Projects">
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/people">
                            <a href name="People">
                                People
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-1 usercontainer">
                <Tooltip title="Account settings">
                    <IconButton size="small" sx={{ ml: 2 }}>
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
};

export default TopNav;
