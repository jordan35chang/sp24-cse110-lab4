let d = new Date();
let time = d.toLocaleTimeString();
function printTime() {
	console.log(time)
}
setInterval(printTime, 1000);