// As a user, I can:
// See the timer increment every second once the page has loaded.
// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener('DOMContentLoaded', start)
function start(){
    beginCounting()
    beginLiker()
    commenter()
}

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')

//I have to put everything related to changing the counter in the same function, and assign the counter value like 
// beginCounting.num so that all of the inner functions change the same value. 
function beginCounting(){
        plus.addEventListener('click', handlePlus)
    minus.addEventListener('click', handleMinus)
    plus.addEventListener('click', handlePlus)
    minus.addEventListener('click', handleMinus)
    beginCounting.num = parseInt(document.getElementById('counter').innerText)
    function handleMinus(){
        beginCounting.num -= 1
        document.getElementById('counter').innerText = beginCounting.num
    }
    
    function handlePlus(){
        beginCounting.num += 1
        document.getElementById('counter').innerText = beginCounting.num
    }
    
    int = setInterval(countUp, 1000)
    function countUp(){
        beginCounting.num += 1
        document.getElementById('counter').innerText = beginCounting.num
    } function pauseCounter(){
        if (int){
            clearInterval(int)
            int = null
            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
            pause.textContent = 'resume'
        }
        else {  
            clearInterval(int)
            int = setInterval(countUp, 1000)
            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            pause.textContent = 'pause'
        }  
    } 
    pause.addEventListener('click', pauseCounter)
}
     
function beginLiker(){
        heart.addEventListener('click', likeNumber)}

const likeList = document.querySelector('.likes');
const fullArray = []        
function likeNumber(){
    let currentNumber = parseInt(document.getElementById('counter').innerText)
    fullArray.push(currentNumber)
    let resultObj = {}
    resultObj = fullArray.reduce(callback, {})
    function callback(fullArray, index){
        if (index in fullArray) {
            fullArray[index]++
        } else {fullArray[index] = 1}
        return fullArray
    }
    likeList.innerHTML = ""
    for(key in resultObj){
        const addLike = document.createElement('li')
        addLike.innerText = `The number ${key} was liked ${resultObj[key]} times!`
        likeSentence = likeList.appendChild(addLike)
    }     
}            
//Don't change above line
// Have to put default on the form, not its input
function commenter(){
    form = document.getElementById('comment-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let commentInput = document.getElementById('comment-input')
        addComment(commentInput.value)
    })

    function addComment(comment){
        const commentList = document.getElementById('list')
        let line = document.createElement('li')
        line.textContent = comment
        if(comment != ""){
            commentList.appendChild(line)
            
        } 
        document.getElementById('comment-form').reset()
    }
}
