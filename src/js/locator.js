const locateBttn = document.getElementById("locate-bttn");
const geoInfo = document.querySelector(".contact__geolocation");

locateBttn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(success, error);
});

const success = (position) => {
    const GLOBE_WIDTH = 256;

    // User approx location
    const p1 = position.coords.longitude;
    const p2 = 16.8131292;

    let angle = p2 - p1;

    if (angle < 0) { angle += 360; }

    const zoom = Math.round(Math.log(256 * 360 / angle / GLOBE_WIDTH) / Math.LN2);

    // www.google.com/maps/dir/${latitude},${longitude}/52.3376624,16.8131292/@52.3677898,16.8126858,${zoomLevel}z/data=!4m2!4m1!3e0?hl=pl
    const locateUrl = `https://www.google.com/maps/dir/${position.coords.latitude},${position.coords.longitude}/52.3376624,16.8131292/@52.3677898,16.8126858,${zoom}z/data=!4m2!4m1!3e0?hl=pl`;

    window.open(locateUrl, '_blank');
}

const error = () => {
    geoInfo.innerText = "*by wyznaczyć trasę\n włącz geolokalizacje";
}