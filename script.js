function changeText() {
    const textElement = document.getElementById("myText");
    const yesAJElement = document.getElementById("yesAJ");
    setInterval(() => {
       const currentTime = new Date();
       const currentHour = currentTime.getHours();
       const currentMinute = currentTime.getMinutes();
       const amPm = currentHour >= 12 ? "PM" : "AM";
       const hour = currentHour % 12 || 12;
       textElement.textContent = `Tim it's ${hour}:${currentMinute.toString().padStart(2, '0')} ${amPm}. Time to play Dark Souls 2`;
       yesAJElement.textContent = "Yes AJ";
    }, 1000);
   }


 
   function shareImage() {
 html2canvas(document.querySelector('.meme')).then(function(canvas) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = image;
    link.download = 'meme.png';
    link.click();

    // Display instructions on how to share the image on Discord
    alert("Your meme has been downloaded! To share it on Discord, upload the image to any image hosting service and then paste the link here.");
 });
}
