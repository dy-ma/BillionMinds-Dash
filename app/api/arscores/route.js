import { randomInt } from "crypto";

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}


export async function GET() {
    let numRandomDataPoints = 10;
    let dates = getDates(new Date(), (new Date()).addDays(numRandomDataPoints));
    let data = dates.map(date => ({
            time: date.getDate(),
            ARScore: randomInt(100)
        }))

    return Response.json(data);
}