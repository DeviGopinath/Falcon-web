import { APIService } from "../../service/api.service";
import { useState } from "react";
import "../../style/Allocation.css";

const Allocation = (allocationList) => {
    const data = allocationList;
    console.log(data);

    return (
        <div className="">
            {/* {data.map((item) => ( */}
            {/* <div className="row datarowallocation">
                <div className="col-md-2 namecolumn">
                    name
                    <div className="sek">Revenue</div>
                    <div className="finutil">Fin util</div>
                    <div className="opsutil">Ops util</div>
                </div>
                <div className="col-md-6 datacolumn">
                    <div className="row projdatarow">
                        <div className="col-md-4">data</div>
                        <div className="col-md-4">data</div>
                        <div className="col-md-4">data</div>
                    </div>
                    <div className="row projdatarow">
                        <div className="col-md-4">data</div>
                        <div className="col-md-4">data</div>
                        <div className="col-md-4">data</div>
                    </div>
                </div>
            </div> */}
            {/* ))} */}
        </div>
    );
};

export default Allocation;
