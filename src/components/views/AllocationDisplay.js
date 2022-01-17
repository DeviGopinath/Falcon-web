import "../../style/Allocation.css";

const Allocation = (props) => {
    console.log(props);
    const data = props.allocationList;
    const activeProjects = props.activeProjects.count;
    const totalMembers = props.totalMembers.count;
    const heading = ["Name", "Project", "Allocation", "Revenue"];
    const alloc = [];
    const rev = [];
    console.log(data);
    data.map((item) => {
        var r = [];
        var all = [];
        item.map((a) => {
            if (a.revenue) {
                r.push(a.revenue);
            }
            if (a.allocation) {
                all.push(a.allocation);
            }
        });
        var sumrev = r.reduce((c, b) => c + b, 0);
        rev.push(sumrev);
        var sumalloc = all.reduce((c, b) => c + b, 0);
        alloc.push(sumalloc);
    });

    console.log(alloc);

    var totalAlloc = 0;
    alloc.map((k) => {
        totalAlloc = totalAlloc + k;
    });

    var totalRev = 0;
    rev.map((k) => {
        totalRev = totalRev + k;
    });

    console.log(rev);
    return (
        <div>
            <div className="summaryrowallocation">
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Working days</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">{totalAlloc}</div>
                    <div className="summaryitem">Allocated hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">VALUE</div>
                    <div className="summaryitem">Billable hours</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvaluebillable">VALUE</div>
                    <div className="summaryitembillable">
                        Billable utilisation
                    </div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">{totalRev} SEK</div>
                    <div className="summaryitem">Revenue</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">{activeProjects}</div>
                    <div className="summaryitem">Active Projects</div>
                </div>
                <div className="summaryboxallocation">
                    <div className="summaryvalue">{totalMembers}</div>
                    <div className="summaryitem ">Members</div>
                </div>
            </div>
            <div className="maincont">
                <div className="row titlerowallocation">
                    {heading.map((item) => (
                        <div className="col-md-3">{item}</div>
                    ))}
                </div>
            </div>
            <div className="maincont">
                {data.map(
                    (item, index) =>
                        item.length > 0 && (
                            <div className="row datarowallocation">
                                <div className="col-md-3 namecolumn">
                                    <div className="nameitem">
                                        {item[0].empname}
                                    </div>
                                    <div className="sek">{rev[index]} SEK</div>
                                    <div className="finutil"> Fin util</div>
                                    <div className="opsutil"> Ops util</div>
                                </div>
                                <div className="col-md-9 datacolumn">
                                    {item.map(
                                        (x) =>
                                            x.revenue && (
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
                                            )
                                    )}
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
                                    - - - - - - - - - - - - - - - - - - - - - -
                                    - - - - - - - - - - - - - - - - - - - - - -
                                    - - - - - - - - - - - - - - - - - - - - - -
                                    - - - - - - - - - - - - - - - - - - - - - -
                                    - - - - - - - - - - - - - - - - - -
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Allocation;
