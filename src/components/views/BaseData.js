import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { APIService } from "../../service/api.service";
import { useState } from "react";
import "../../style/BaseData.css";

const BaseData = () => {
    const [month, setMonth] = useState(new Date());
    const [nordEmpInput, setNordEmpInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [nordConInput, setNordConInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [landedInput, setLandedInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [offEmpInput, setOffEmpInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [offConInput, setOffConInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [totalEmpInput, setTotalEmpInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [workDayInput, setWorkDayInput] = useState({
        enterprise: "",
        microsoft: "",
        digital: "",
        nxt: "",
        sweden: "",
        finland: "",
        norway: "",
    });
    const [nordicEmp, setNordicEmp] = useState({});
    const [nordicSubcon, setNordicSubcon] = useState({});
    const [landed, setLanded] = useState({});
    const [offShoreInd, setOffShoreInd] = useState({});
    const [offShoreIndSubcon, setOffShoreIndSubcon] = useState({});
    const [totalEmp, setTotalEmp] = useState({});
    const [workingDays, setWorkingDays] = useState({});
    const [open, setOpen] = useState(false);
    const [dialogtitle, setDialogTitle] = useState("");

    const handleOpen = (data) => {
        setOpen(data);
    };

    const handleTitle = (data) => {
        setDialogTitle(data);
    };

    const onChange = (date, dateString) => {
        setMonth(dateString);
        getEmp(dateString);
    };

    const getEmp = (month) => {
        APIService.getData(month).then((response) => {
            if (
                response.status === "SUCCESS" &&
                response.data[0] !== undefined
            ) {
                var data = response.data;
                for (let i = 0; i <= data.length; i++) {
                    var temp = data[i];
                    if (temp !== undefined) {
                        if (temp.cat_id === 1) {
                            setNordicEmp({
                                ...nordicEmp,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 2) {
                            setNordicSubcon({
                                ...nordicSubcon,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 3) {
                            setLanded({
                                ...landed,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 4) {
                            setOffShoreInd({
                                ...offShoreInd,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 5) {
                            setOffShoreIndSubcon({
                                ...offShoreIndSubcon,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 6) {
                            setTotalEmp({
                                ...totalEmp,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                        if (temp.cat_id === 7) {
                            setWorkingDays({
                                ...workingDays,
                                [temp.unit]: temp.employee_count,
                            });
                        }
                    }
                }
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

    const insertEmp = (month, d1, d2, d3, d4, d5, d6, d7) => {
        APIService.insertData(month, d1, d2, d3, d4, d5, d6, d7).then(
            (response) => {
                if (response.status === "SUCCESS") {
                    console.log("Success");
                }
            }
        );
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        insertEmp(
            month,
            Object.values(nordEmpInput),
            Object.values(nordConInput),
            Object.values(landedInput),
            Object.values(offEmpInput),
            Object.values(offConInput),
            Object.values(totalEmpInput),
            Object.values(workDayInput)
        );
        setNordEmpInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setNordConInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setLandedInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setOffEmpInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setOffConInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setTotalEmpInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
        setWorkDayInput({
            enterprise: "",
            microsoft: "",
            digital: "",
            nxt: "",
            sweden: "",
            finland: "",
            norway: "",
        });
    };

    const handleNordEmpChange = (evt) => {
        const value = evt.target.value;
        setNordEmpInput({
            ...nordEmpInput,
            [evt.target.name]: +value,
        });
    };

    const handleNordConChange = (evt) => {
        const value = evt.target.value;
        setNordConInput({
            ...nordConInput,
            [evt.target.name]: +value,
        });
    };

    const handleLandedChange = (evt) => {
        const value = evt.target.value;
        setLandedInput({
            ...landedInput,
            [evt.target.name]: +value,
        });
    };

    const handleOffEmpChange = (evt) => {
        const value = evt.target.value;
        setOffEmpInput({
            ...offEmpInput,
            [evt.target.name]: +value,
        });
    };

    const handleOffConChange = (evt) => {
        const value = evt.target.value;
        setOffConInput({
            ...offConInput,
            [evt.target.name]: +value,
        });
    };

    const handleTotalEmpChange = (evt) => {
        const value = evt.target.value;
        setTotalEmpInput({
            ...totalEmpInput,
            [evt.target.name]: +value,
        });
    };

    const handleWorkDayChange = (evt) => {
        const value = evt.target.value;
        setWorkDayInput({
            ...workDayInput,
            [evt.target.name]: +value,
        });
    };

    return (
        <div>
            <div className="main">
                <form onSubmit={onSubmitHandler}>
                    <div className="row basedatahead">
                        <div className="col-md-4 heading">Base Data</div>
                        <div className="col-md-3 month">
                            <DatePicker onChange={onChange} picker="month" />
                        </div>
                    </div>
                    <div className="row titlerow">
                        <div className="col-md-3 titles"></div>
                        <div className="col-md-1">Enterprise</div>
                        <div className="col-md-1">Microsoft</div>
                        <div className="col-md-1">Digital</div>
                        <div className="col-md-1">NXT</div>
                        <div className="col-md-1">Sweden</div>
                        <div className="col-md-1">Finland</div>
                        <div className="col-md-1">Norway</div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">Nordic Employees</div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Enterprise
                                        : nordEmpInput.enterprise
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Microsoft
                                        : nordEmpInput.microsoft
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Digital
                                        : nordEmpInput.digital
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    nordicEmp ? nordicEmp.NXT : nordEmpInput.nxt
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Sweden
                                        : nordEmpInput.sweden
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Finland
                                        : nordEmpInput.finland
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    nordicEmp
                                        ? nordicEmp.Norway
                                        : nordEmpInput.norway
                                }
                                onChange={handleNordEmpChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">Nordic Subcon</div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Enterprise
                                        : nordConInput.enterprise
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Microsoft
                                        : nordConInput.microsoft
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Digital
                                        : nordConInput.digital
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.NXT
                                        : nordConInput.nxt
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Sweden
                                        : nordConInput.sweden
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Finland
                                        : nordConInput.finland
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    nordicSubcon
                                        ? nordicSubcon.Norway
                                        : nordConInput.norway
                                }
                                onChange={handleNordConChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">Landed - India</div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    landed
                                        ? landed.Enterprise
                                        : landedInput.enterprise
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    landed
                                        ? landed.Microsoft
                                        : landedInput.microsoft
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    landed
                                        ? landed.Digital
                                        : landedInput.digital
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={landed ? landed.NXT : landedInput.nxt}
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    landed ? landed.Sweden : landedInput.sweden
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    landed
                                        ? landed.Finland
                                        : landedInput.finland
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    landed ? landed.Norway : landedInput.norway
                                }
                                onChange={handleLandedChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div md={3} className="col-md-3 titles">
                            Offshore - India
                        </div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Enterprise
                                        : offEmpInput.enterprise
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Microsoft
                                        : offEmpInput.microsoft
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Digital
                                        : offEmpInput.digital
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    offShoreInd
                                        ? offShoreInd.NXT
                                        : offEmpInput.nxt
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Sweden
                                        : offEmpInput.sweden
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Finland
                                        : offEmpInput.finland
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    offShoreInd
                                        ? offShoreInd.Norway
                                        : offEmpInput.norway
                                }
                                onChange={handleOffEmpChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">
                            Offshore - India subcon
                        </div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Enterprise
                                        : offConInput.enterprise
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Microsoft
                                        : offConInput.microsoft
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Digital
                                        : offConInput.digital
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.NXT
                                        : offConInput.nxt
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Sweden
                                        : offConInput.sweden
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Finland
                                        : offConInput.finland
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    offShoreIndSubcon
                                        ? offShoreIndSubcon.Norway
                                        : offConInput.norway
                                }
                                onChange={handleOffConChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">Total Employees</div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    totalEmp
                                        ? totalEmp.Enterprise
                                        : totalEmpInput.enterprise
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    totalEmp
                                        ? totalEmp.Microsoft
                                        : totalEmpInput.microsoft
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    totalEmp
                                        ? totalEmp.Digital
                                        : totalEmpInput.digital
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    totalEmp ? totalEmp.NXT : totalEmpInput.nxt
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    totalEmp
                                        ? totalEmp.Sweden
                                        : totalEmpInput.sweden
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    totalEmp
                                        ? totalEmp.Finland
                                        : totalEmpInput.finland
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    totalEmp
                                        ? totalEmp.Norway
                                        : totalEmpInput.norway
                                }
                                onChange={handleTotalEmpChange}
                            ></input>
                        </div>
                    </div>

                    <div className="row datarow">
                        <div className="col-md-3 titles">Working Days</div>
                        <div className="col-md-1">
                            <input
                                name="enterprise"
                                value={
                                    workingDays
                                        ? workingDays.Enterprise
                                        : workDayInput.enterprise
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="microsoft"
                                value={
                                    workingDays
                                        ? workingDays.Microsoft
                                        : workDayInput.microsoft
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="digital"
                                value={
                                    workingDays
                                        ? workingDays.Digital
                                        : workDayInput.digital
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="nxt"
                                value={
                                    workingDays
                                        ? workingDays.NXT
                                        : workDayInput.nxt
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="sweden"
                                value={
                                    workingDays
                                        ? workingDays.Sweden
                                        : workDayInput.sweden
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="finland"
                                value={
                                    workingDays
                                        ? workingDays.Finland
                                        : workDayInput.finland
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                        <div className="col-md-1">
                            <input
                                name="norway"
                                value={
                                    workingDays
                                        ? workingDays.Norway
                                        : workDayInput.norway
                                }
                                onChange={handleWorkDayChange}
                            ></input>
                        </div>
                    </div>
                    <div className="row submitrow">
                        <div className="col-md-2">
                            <button type="submit" className="submitbtn">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BaseData;
