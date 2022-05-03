const day = `Monday`;

switch (day) {
    case `Monday`:
        console.log(`Plan course structure`);
        console.log("Go to coding meetup");
        break;
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Write code example");
        break;
    case "Friday":
        console.log("Record videos");
        break;
    case "Saturday":
        console.log("Enjoy the weekend");
        break;
    case "Sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}