const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.question-area .answer')
const error = document.querySelector('.error')

const answers = ['Tak', 'Nie', "Nie chcesz żebym odpowiadała na to pytanie...", "Jeżeli sądzisz, że wiesz już wszystko, to znaczy, że zostałeś źle poinformowany.", "Od cudzego zdania lepsze jest własne doświadczenie.", 'Gdy nie masz nic do ofiarowania, ofiaruj uśmiech.', "Nauka, która trafia do uszu, lecz nie do serca, jest jak obiad jedzony w marzeniach.", "Nie bij muchy, która siedzi na głowie tygrysa.", "Lepiej nie wiedzieć, niektórych rzeczy...", "Lepiej nie pytaj...", "Głowa do góry, będzie dobrze"]

/* funkcja po niżej wersja alternatywna */
// const showTheAnswer = () => {
//     let showAnswer = Math.floor(Math.random() * answers.length)
//     return showAnswer
// }

const checkInput = () => {
    let errorMessageOne = "Proszę zadać pytanie!";
    let errorMessageTwo = 'Pytanie musi się kończyć "?"!'
    let errorMessageThree = "Nie, to nie przejdzie, zadaj pytanie :)"
    let errorMessageFour = "Taki cwaniak jesteś...próbuj dalej ;)"
    if (input.value === '') {
        error.textContent = errorMessageOne;
    } else if (input.value.charAt(input.value.length - 1) !== "?") {
        error.textContent = errorMessageTwo;
    } else if (input.value === "?") {
        error.textContent = errorMessageThree;
    } else if (input.value.length <= 2 && input.value.charAt(input.value.length - 1) === "?") {
        error.textContent = errorMessageFour;
    }
}

const answerTheQuestion = () => {
    if (input.value.length > 2 && input.value.charAt(input.value.length - 1) === "?") {
        let randomAnswer = Math.floor(Math.random() * answers.length)
        const answerText = answers[randomAnswer]
        answer.innerHTML = `<span>Odpowiedź:</span> ${answerText}`
        error.textContent = ''
        ball.classList.remove('shake-animation');

    } else {
        checkInput()
        ball.classList.remove('shake-animation');
        answer.textContent = ''

    }
}

const getAnswer = () => {
    ball.classList.add('shake-animation');
    setTimeout(answerTheQuestion, 1000);
}

ball.addEventListener('click', getAnswer)