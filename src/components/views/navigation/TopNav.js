import "../../../style/TopNav.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import icon from "../../../images/falconlogo.png";
import { useState } from "react";

const TopNav = () => {
    // const [stylealloc, setStyleAlloc] = useState("link");
    // const [styleprojects, setStyleProjects] = useState("link");
    // const [stylepeople, setStylePeople] = useState("link");

    // const changeStyleAlloc = () => {
    //     console.log("you just clicked alloc");
    //     setStyleAlloc("linknew");
    // };
    // const changeStyleProjects = () => {
    //     console.log("you just clicked projects");
    //     setStyleProjects("linknew");
    // };
    // const changeStylePeople = () => {
    //     console.log("you just clicked people");
    //     setStylePeople("linknew");
    // };

    return (
        <div className="row headbox">
            <div className="col-md-2 icon">
                <img src={icon} alt="falconlogo"></img>
                <span>FALCON</span>
            </div>
            <div className="col-md-9 ulist">
                <ul className="ulist">
                    <li>
                        <Link
                            className="link"
                            to="/"
                            // onClick={changeStyleAlloc()}
                        >
                            <a href name="Allocation">
                                Allocation
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            to="/projects"
                            // onClick={changeStyleProjects()}
                        >
                            <a href name="Projects">
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            to="/people"
                            // onClick={changeStylePeople()}
                        >
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
