import "../../../style/TopNav.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import icon from "../../../images/falconlogo.png";
import { useState } from "react";

const TopNav = () => {
    const [tabs, setTabs] = useState([
        { tabname: "Allocation", path: "/", selected: false },
        { tabname: "Projects", path: "/projects", selected: false },
        { tabname: "People", path: "/people", selected: false },
    ]);

    const select = (i) => {
        var arr = tabs;
        console.log(i);
        arr.map((item, index) => {
            i === index ? (item.selected = true) : (item.selected = false);
        });
        setTabs(arr);
        console.log(tabs[i]);
    };

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
                            <Link
                                className="link"
                                to={item.path}
                                onClick={() => select(i)}
                            >
                                <a href name={item.tabname}>
                                    {item.selected && (
                                        <span className="selected">
                                            {item.tabname}
                                        </span>
                                    )}
                                    {!item.selected && (
                                        <span className="default">
                                            {item.tabname}
                                        </span>
                                    )}
                                </a>
                            </Link>
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
