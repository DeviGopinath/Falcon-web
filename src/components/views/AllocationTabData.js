import "../../style/Projects.css";
import React from "react";

function AllocationTabData({ revalloc }) {
    const title = [
        "Member",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const alloc = [];
    revalloc.map((item, index) => {
        var temp = [
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
            { allocation: 0, name: "" },
        ];
        item.map((j, k) => {
            title.slice(1).map((i, ind) => {
                if (j.month === i) {
                    temp[ind].allocation = j.hours;
                    temp[ind].name = j.name;
                } else {
                    temp[ind].name = j.name;
                }
            });
        });
        alloc.push(temp);
    });
    return (
        <div className="baseindproj">
            <div className="alloctabmain">
                <div className="alloctitlerow">
                    {title.map((item) => (
                        <div className="col">{item}</div>
                    ))}
                </div>
            </div>

            {alloc.map((item) => (
                <div className="alloctabmain">
                    <div className="allocdatarow">
                        <div className="col name">{item[0].name}</div>
                        {item.map((i) => (
                            <div className="col">{i.allocation}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllocationTabData;
