import "../../style/Allocation.css";

const Allocation = (allocationList) => {
    const data = allocationList.allocationList;
    console.log(data);
    const alloc = [];
    const rev = [];
    console.log(data);
    data.map((item) => {
        var r = [];
        var all = [];
        item.map((a) => {
            r.push(a.revenue);
            all.push(a.allocation);
        });
        var sumrev = r.reduce((c, b) => c + b, 0);
        rev.push(sumrev);
        var sumalloc = all.reduce((c, b) => c + b, 0);
        alloc.push(sumalloc);
    });
    console.log(alloc);
    console.log(rev);
    return (
        <div className="allocdisplaycont">
            {data.map((item, index) => (
                <div className="row datarowallocation">
                    <div className="col-md-3 namecolumn">
                        <div className="nameitem">{item[0].empname}</div>
                        {console.log(index)}
                        <div className="sek">{rev[index]} SEK</div>
                        <div className="finutil"> Fin util</div>
                        <div className="opsutil"> Ops util</div>
                    </div>
                    <div className="col-md-9 datacolumn">
                        {item.map((x) => (
                            <div className="row projdatarow">
                                <div className="col-md-3 projdataitem">
                                    {x.name}
                                </div>
                                <div className="col-md-3 projdataitem">
                                    {x.allocation} Hours
                                </div>
                                <div className="col-md-3 projdataitem">
                                    {x.revenue} SEK
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row ">
                        <div className="col-md-3"></div>
                        <div className="col-md-9 totalcolumn">
                            <div className="row projtotalrow">
                                <div className="col-md-3 projtotalitem">
                                    Total:
                                </div>
                                <div className="col-md-3 projtotalitem">
                                    {alloc[index]} hours
                                </div>
                                <div className="col-md-3 projtotalitem">
                                    {rev[index]} SEK
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - - - - - - - - - - - - - - - - - - - - -
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Allocation;
