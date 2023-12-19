const dynamicText = document.querySelector("h3 span");
const words = ["Developer", "Designer", "Freelancer"];
let wordIndex = 0, charIndex = 0, isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.toggle("stop-blinking", charIndex < currentWord.length);

    if ((!isDeleting && charIndex < currentWord.length) || (isDeleting && charIndex > 0)) {
        charIndex += isDeleting ? -1 : 1;
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = (wordIndex + !isDeleting) % words.length;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();




 