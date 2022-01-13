import "../../../style/TopNav.css";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import icon from "../../../images/falconlogo.png";
import { useState } from "react";

const TopNav = () => {
    const tabs = [
        { tabname: "Allocation", path: "/" },
        { tabname: "Projects", path: "/projects" },
        { tabname: "People", path: "/people" },
    ];

    return (
        <div className="row headbox">
            <div className="col-md-2 icon">
                <img src={icon} alt="falconlogo"></img>
                <span>FALCON</span>
            </div>
            <div className="col-md-9 ulist">
                <ul className="ulist">
                    {tabs.map((item, i) => (
                        <li key={i}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "selected" : "link"
                                }
                                to={item.path}
                            >
                                {item.tabname}
                            </NavLink>
                        </li>
                    ))}
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
