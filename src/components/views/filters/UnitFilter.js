import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../../style/SideNav.css";
import LineChart from "../charts/LineChart";
import { useState } from "react";
import { APIService } from "../../../service/api.service";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const UnitFilter = (props) => {
    const [value, setValue] = useState("");
    const [range, setRange] = useState();
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

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };
    const onChange = (date, dateString) => {
        setRange(dateString);
        APIService.getDateData(value, dateString[0], dateString[1]).then(
            (response) => {
                if (response.status === "SUCCESS") {
                    console.log(response.datedata);
                    var data = response.datedata;
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
                            var data_month = temp.data_month;
                            if (temp.cat_id === 1) {
                                obj1 = { ...obj1, [data_month]: val };
                            } else if (temp.cat_id === 2) {
                                obj2 = {
                                    ...obj2,
                                    [data_month]: val,
                                };
                            } else if (temp.cat_id === 3) {
                                obj3 = {
                                    ...obj3,
                                    [data_month]: val,
                                };
                            } else if (temp.cat_id === 4) {
                                obj4 = {
                                    ...obj4,
                                    [data_month]: val,
                                };
                            } else if (temp.cat_id === 5) {
                                obj5 = {
                                    ...obj5,
                                    [data_month]: val,
                                };
                            } else if (temp.cat_id === 6) {
                                obj6 = {
                                    ...obj6,
                                    [data_month]: val,
                                };
                            } else if (temp.cat_id === 7) {
                                obj7 = {
                                    ...obj7,
                                    [data_month]: val,
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
                    return;
                } else {
                    setNordicEmp("");
                    setNordicSubcon("");
                    setLanded("");
                    setOffShoreInd("");
                    setOffShoreIndSubcon("");
                    setTotalEmp("");
                    setWorkingDays("");
                }
            }
        );
    };

    return (
        <div>
            <div className="row filterrow">
                <div className="col-md-2 unitcol">
                    <InputLabel
                        sx={{ marginLeft: 2 }}
                        id="label"
                        className="unitlabel"
                    >
                        Select Unit
                    </InputLabel>
                    <FormControl
                        sx={{
                            minWidth: 120,
                            bgcolor: "#ffff",
                            border: "none",
                        }}
                    >
                        <Select value={value} onChange={onChangeHandler}>
                            <MenuItem value="Enterprise">Enterprise</MenuItem>
                            <MenuItem value="Microsoft">Microsoft</MenuItem>
                            <MenuItem value="Digital">Digital</MenuItem>
                            <MenuItem value="NXT">NXT</MenuItem>
                            <MenuItem value="Sweden">Sweden</MenuItem>
                            <MenuItem value="Finland">Finland</MenuItem>
                            <MenuItem value="Norway">Norway</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-3 mx-5 px-3">
                    <InputLabel
                        sx={{ marginLeft: 2 }}
                        id="label"
                        className="rangelabel"
                    >
                        Select Month Range
                    </InputLabel>
                    <RangePicker onChange={onChange} picker="month" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={totalEmp ? totalEmp : ""}
                            title="Employees"
                        />
                    )}
                </div>

                <div div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={nordicEmp ? nordicEmp : ""}
                            title="Nordic Employees"
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={nordicSubcon ? nordicSubcon : ""}
                            title="Nordic Subcontractors"
                        />
                    )}
                </div>
                <div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={landed ? landed : ""}
                            title="Landed India Employees"
                        />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={offShoreInd ? offShoreInd : ""}
                            title="OffShore India Employees"
                        />
                    )}
                </div>
                <div className="col-md-5">
                    {range && (
                        <LineChart
                            month={range}
                            data={offShoreIndSubcon ? offShoreIndSubcon : ""}
                            title="Offshore India Subcontractors"
                        />
                    )}
                </div>
                <div className="row">
                    {range && (
                        <LineChart
                            month={range}
                            data={workingDays ? workingDays : ""}
                            title="Working Days"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default UnitFilter;
