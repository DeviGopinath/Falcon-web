import "../../../style/TopNav.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import { toast } from "react-toastify";

const TopNav = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        props.setauth(false);
        toast.success("Logged out successfully");
    };

    return (
        <div className="row headbox">
            <div className="col-md-2 icon">ALPHA MIS</div>
            <div className="col-md-9 ulist">
                <ul className="ulist">
                    <li>
                        <Link className="link" to="/home">
                            <a href name="data">
                                Projects{" "}
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/reports">
                            <a href name="reports">
                                People{" "}
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/dashboards">
                            <a href>Allocation </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-1 usercontainer">
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
};

export default TopNav;
