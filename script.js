const inbox = document.getElementById("mood");
const moodbox = document.getElementById("box");

inbox.addEventListener("change", changeColor);

function changeColor(){
    const moood = inbox.value;
    if (moood=="angry"){
        moodbox.style.backgroundColor = 'red';
    } else if (moood=="sad"){
        moodbox.style.backgroundColor = 'blue';

    } else if (moood=="happy"){
        moodbox.style.backgroundColor = 'yellow';

    } else if (moood=="hungry"){
        moodbox.style.backgroundColor = 'black';

    } else {
        moodbox.style.backgroundColor = 'grey';

    }
}