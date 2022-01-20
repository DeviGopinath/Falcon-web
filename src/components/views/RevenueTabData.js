import "../../style/Projects.css";
import React from "react";

function RevenueTabData({ revalloc }) {
    console.log(revalloc);
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
    const revenue = [];
    revalloc.map((item, index) => {
        var temp = [
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
            { rev: 0, name: "" },
        ];
        item.map((j, k) => {
            title.slice(1).map((i, ind) => {
                console.log(i, j.month);
                console.log(j.month === i);
                if (j.month === i) {
                    temp[ind].rev = j.revenue;
                    temp[ind].name = j.name;
                } else {
                    temp[ind].name = j.name;
                }
            });
        });
        revenue.push(temp);
    });
    console.log(revenue);
    return (
        <div className="baseindproj">
            <div className="alloctabmain">
                <div className="alloctitlerow">
                    {title.map((item) => (
                        <div className="col">{item}</div>
                    ))}
                </div>
            </div>

            {revenue.map((item) => (
                <div className="alloctabmain">
                    <div className="allocdatarow">
                        <div className="col name">{item[0].name}</div>
                        {item.map((i) => (
                            <div className="col">{i.rev}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RevenueTabData;
