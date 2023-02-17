// Grab the date class
// Attach the date onto that class
//Display that date

// const exampleDate = new Date()

const today = new Date()
const time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds()


function displayDate() {

    const date = new Date()
    let example = date.toDateString()
    const displayDate = document.createElement("h3")
    displayDate.id = "display-date"
    displayDate.innerText = example

    const getDiv = document.querySelector(".date")

    getDiv.append(displayDate)
}

displayDate()

function displayTime() {
    toRegularTime = (militaryTime) => {
        const [hours, minutes, seconds] = militaryTime.split(':');
        return `${(hours > 12) ? hours - 12 : hours}:${minutes}${seconds ? `:${seconds}` : ''} ${(hours >= 12) ? 'PM' : 'AM'}`;
    }

    const displayTime = document.createElement("h3")
    displayTime.id = "display-time"
    displayTime.innerText = toRegularTime(time)


    const getDiv = document.querySelector(".time")
    getDiv.append(displayTime)

}

displayTime(time)


console.log("Hello, my name is Thomas's Thinkpad.")