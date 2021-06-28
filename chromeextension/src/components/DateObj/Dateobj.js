

function DateObj() {
    const oldDate = new Date();
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const date = {
        // Day of the month
        date: oldDate.getDate(),
        dayOfWeek: weekDays[oldDate.getDay()],
        time: oldDate.toLocaleTimeString(
            [], { hour: '2-digit', minute: '2-digit' }
        ),
        //Day of the week
        day: oldDate.getDay(),
        month: month[oldDate.getMonth()]
    }
    console.log(date)
    return date
}

export default DateObj