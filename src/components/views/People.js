import { DatePicker } from "antd";
import { APIService } from "../../service/api.service";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import TotalChart from "./charts/TotalChart";
import UnitFilter from "./filters/UnitFilter";
import AllBarChart from "./charts/AllBarChart";
import IndiaBarChart from "./charts/IndiaBarChart";
import LineChart from "./charts/LineChart";
import "../../style/DashBoards.css";

const DashBoards = () => {
    const [month, setMonth] = useState();
    const [nordicEmp, setNordicEmp] = useState({});
    const [nordicSubcon, setNordicSubcon] = useState({});
    const [landed, setLanded] = useState({});
    const [offShoreInd, setOffShoreInd] = useState({});
    const [offShoreIndSubcon, setOffShoreIndSubcon] = useState({});
    const [totalEmp, setTotalEmp] = useState({});
    const [workingDays, setWorkingDays] = useState();
    const [open, setOpen] = useState(false);
    const [dialogtitle, setDialogTitle] = useState("");

    const handleOpen = (data) => {
        setOpen(data);
    };

    const handleTitle = (data) => {
        setDialogTitle(data);
    };

    const getInformation = (month) => {
        APIService.getData(month).then((response) => {
            if (
                response.status === "SUCCESS" &&
                response.data[0] !== undefined
            ) {
                var data = response.data;
                var obj1 = {};
                var obj2 = {};
                var obj3 = {};
                var obj4 = {};
                var obj5 = {};
                var obj6 = {};
                var obj7 = {};
                for (let i = 0; i <= data.length; i++) {
                    var temp = data[i];
                    if (temp !== undefined) {
                        var val = temp.employee_count;
                        var unit = temp.unit;
                        if (temp.cat_id === 1) {
                            obj1 = {
                                ...obj1,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 2) {
                            obj2 = {
                                ...obj2,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 3) {
                            obj3 = {
                                ...obj3,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 4) {
                            obj4 = {
                                ...obj4,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 5) {
                            obj5 = {
                                ...obj5,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 6) {
                            obj6 = {
                                ...obj6,
                                [unit]: val,
                            };
                        } else if (temp.cat_id === 7) {
                            obj7 = {
                                ...obj7,
                                [unit]: val,
                            };
                        }
                    }
                }
                setNordicEmp(obj1);
                setNordicSubcon(obj2);
                setLanded(obj3);
                setOffShoreInd(obj4);
                setOffShoreIndSubcon(obj5);
                setTotalEmp(obj6);
                setWorkingDays(obj7);
            } else if (response === "Not authorized") {
                handleOpen(true);
                handleTitle("You are not authenticated to view the data!");
            } else {
                setNordicEmp("");
                setNordicSubcon("");
                setLanded("");
                setOffShoreInd("");
                setOffShoreIndSubcon("");
                setTotalEmp("");
                setWorkingDays("");
            }
        });
    };

    const onChange = (date, dateString) => {
        setMonth(dateString);
        getInformation(dateString);
    };
    return (
        <div className="dashboards">
            <div className="row mt-3 headrow">
                <div className="col-md-3 mt-4">
                    <h4>Month-wise Data</h4>
                </div>
            </div>
            <div className="row monthpicker">
                <div className="col-md-2 mx-5">
                    <InputLabel sx={{ marginLeft: 2 }} id="label">
                        Select Month
                    </InputLabel>
                    <DatePicker onChange={onChange} picker="month" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {month && (
                        <LineChart
                            month={month}
                            data={workingDays ? workingDays : ""}
                            title="Working Days"
                        />
                    )}
                </div>
                <div className="col-md-5">
                    {month && (
                        <LineChart
                            month={month}
                            data={totalEmp ? totalEmp : ""}
                            title="Employees"
                        />
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    {month && (
                        <TotalChart
                            month={month}
                            dataOne={nordicEmp ? nordicEmp : ""}
                            dataTwo={nordicSubcon ? nordicSubcon : ""}
                            title="Nordic"
                        />
                    )}
                </div>
                <div className="col-md-5">
                    {month && (
                        <TotalChart
                            month={month}
                            dataOne={landed ? landed : ""}
                            dataTwo={offShoreInd ? offShoreInd : ""}
                            dataThree={
                                offShoreIndSubcon ? offShoreIndSubcon : ""
                            }
                            title="India"
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {month && (
                        <AllBarChart
                            month={month}
                            dataOne={nordicEmp ? nordicEmp : ""}
                            dataTwo={nordicSubcon ? nordicSubcon : ""}
                            titleOne="Nordic Employees"
                            titleTwo="Nordic Subcontractors"
                        />
                    )}
                </div>
                <div className="col-md-5">
                    {month && (
                        <IndiaBarChart
                            month={month}
                            dataOne={landed ? landed : ""}
                            dataTwo={offShoreInd ? offShoreInd : ""}
                            dataThree={
                                offShoreIndSubcon ? offShoreIndSubcon : ""
                            }
                            titleOne="Landed Employees"
                            titleTwo="Offshore Employees"
                            titleThree="Offshore Subcontractors"
                        />
                    )}
                </div>
            </div>
            <div className="row headrow">
                <div className="col-md-3">
                    <h4>Over-time Data</h4>
                </div>
            </div>
            <div className="row ">
                <UnitFilter />
            </div>
        </div>
    );
};

export default DashBoards;
