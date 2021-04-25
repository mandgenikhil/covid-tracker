
export function getChartData(dataList) {

    let chartdata = [];

    dataList.forEach(element => {
        chartdata.push({
            category: element.state_name,
            value1: Number(element.positive),
            value2: Number(element.cured),
            value3: Number(element.death)
        });

    });
    return chartdata
}




export function getOverallStats(dataList) {
    let totalcases = 0;
    let totalrecovered = 0;
    let totaldeaths = 0;

    dataList.forEach(element => {
        totalcases += Number(element.positive);
        totalrecovered += Number(element.cured);
        totaldeaths += Number(element.death);

    });
    return {

        "totalcases": totalcases,
        "totalrecovered": totalrecovered,
        "totaldeaths": totaldeaths

    }






}