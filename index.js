let timeDiv = document.getElementById("time");
function updateTime(){
		timeDiv.innerHTML = new Date().toTimeString().slice(0, 9);
		getTime();
}
let time = {wake: {start: undefined, end: undefined}, lunch: {start: undefined, end: undefined}, sleep: {start: undefined, end: undefined}};

const removeColon = (str => {
	let strings = str.split(':');
	str = `${strings[0]}${strings[1]}`;
	return str;
})

function getTime(st) {
	if(st)
	{
		let indexes = st.split('-');
		time[indexes[0]][indexes[1]] = document.getElementById(st).value;
	}
	let currentTime = removeColon(new Date().toTimeString().slice(0, 5));
	let selectedImage = "default.jpg";
	if(time.wake.start && time.wake.end)
	{
		if(removeColon(time.wake.start) <= currentTime && removeColon(time.wake.end) >= currentTime )
		{
			selectedImage = 'wake.jpeg';
		}
	}
	if(time.lunch.start && time.lunch.end)
	{
		if(removeColon(time.lunch.start) <= currentTime && removeColon(time.lunch.end) >= currentTime )
		{
			selectedImage = 'lunch.jpg';
		}
	}
	if(time.sleep.start && time.sleep.end)
	{
		if(removeColon(time.sleep.start) <= currentTime && removeColon(time.sleep.end) >= currentTime )
		{
			selectedImage = 'sleep.jpeg';
		}
	}
	console.log(selectedImage);
	document.getElementById('image').style.backgroundImage = "url('images/" + selectedImage + "')";
}



