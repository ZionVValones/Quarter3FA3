function generateMusicStory() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);
    
    let biggestNum = Math.max(num1, num2, num3);
    let mostLikedGenre = (biggestNum === num1) ? "Pop" : (biggestNum === num2) ? "R&B" : "Jazz";
    
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = alphabet[num1 - 1] || "Z";
    let totalMins = num2 * num3;
    let hours = Math.floor(totalMins / 60);
    let minutes = totalMins % 60;
    
    let story = `<h2>Music Preferences</h2>
        <div class='box'><p>Number of students who like Pop: <b>${num1}</b></p></div>
        <div class='box'><p>Number of students who like R&B: <b>${num2}</b></p></div>
        <div class='box'><p>Number of students who like Jazz: <b>${num3}</b></p></div>
        <div class='box'><p>The most popular genre among students is: <b>${mostLikedGenre} (${biggestNum})</b></p></div>
        <div class='box'><p>First letter of a music listener's name: <b>${nthLetter}</b></p></div>
        <div class='box'><p>Time spent listening to music per day: <b>${totalMins} minutes</b> (<b>${hours}</b> hours and <b>${minutes}</b> minutes)</p></div>
        <p>Music is the heartbeat of student life.</p>`;
    
    document.getElementById("story").innerHTML = story;
}

document.addEventListener("DOMContentLoaded", generateMusicStory);