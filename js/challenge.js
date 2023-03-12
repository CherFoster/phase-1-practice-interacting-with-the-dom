const timer = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submit = document.getElementById('submit');
const likesList = document.querySelector(".likes")
const likesObject = {}

document.addEventListener("DOMContentLoaded", () => {
    let interval = setInterval(startCount, 1000);

//Increment and Decrement
    plus.addEventListener('click', startCount);
    minus.addEventListener('click', () => {
        i -= 1;
        timer.textContent = i
    });

//Like button
    heart.addEventListener('click', () => {
        let li;
        if (timer.textContent in likesObject) {
            likesObject[timer.textContent] = likesObject[timer.textContent] +1
        } else {
            likesObject[timer.textContent] = 1
        }
        if (document.getElementById(`${timer.textContent}`)) {
            li = document.getElementById(`${timer.textContent}`)

        } else {
            li = document.createElement('li')
            li.id = `${timer.textContent}`
        }
        li.textContent = `${timer.textContent} was liked ${likesObject[timer.textContent]} times`
        likesList.append(li)
    });

//Pause
    pause.addEventListener('click', () => {
        if (pause.innerText === 'pause') {
            pause.innerText = 'resume';
            clearInterval(interval);
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        } else {
            (pause.innerText === 'resume')
            pause.innerText = 'pause';
            setInterval(startCount, 1000);
        }
    });

//Leave a comment
    

});


//Automatic Timer Function
let i = 0;
function startCount() {
    i += 1;
    timer.textContent = i
};