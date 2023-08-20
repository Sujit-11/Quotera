const quotes = {
    science: [
      "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
      "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
      "The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.",
      "Science is a way of life. It is a perspective. Science is the process that takes us from confusion to understanding in a manner that’s precise, predictive, and reliable – a transformation, for those lucky enough to experience it, that is empowering and emotional."
    ],
    inspiration: [
      "Every child is an artist; the problem is staying an artist when you grow up",
      "Hard work beats talent.",
      "If you only ever give 90% in training then you will only ever give 90% when it matters.",
      "Age is no barrier. It’s a limitation you put on your mind."
      
    ],
    love: [
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
      "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
      "Let us always meet each other with smile, for the smile is the beginning of love.",
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages."
      
    ],
    anime: [
        "When People Are Protecting Something Truly Special To Them, They Truly Can Become...As Strong As They Can Be.",
        "In The World, No One Is Perfect. Even If You Keep Pursuing Perfection, You'll Never Reach It. But Along The Way, You'll Become Something Great.",
        "While You're Alive, You Need A Reason For Your Existence. Being Unable To Find One Is The Same As Being Dead.",
        "The concept of hope is nothing more than giving up. A word that holds no true meaning.",
        "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness.",
        "Thinking of peace whilst spilling blood is something that only humans could do.",
        "Feel Pain, Contemplate Pain, Accept Pain, Know Pain.Those who do not understand true pain can never understand true peace.",
        "Wake up to reality! Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain."
      
    ],
  };

  const categoryElement = document.getElementById("category-sel");
  const quoteElement = document.getElementById("quote");
  const prevBtn = document.getElementById("prevBtn");
  const randomBtn = document.getElementById("randomBtn");
  const nextBtn = document.getElementById("nextBtn");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const fontSizeElement = document.getElementById("fontSize");
  const increaseFontBtn = document.getElementById("increaseFontBtn");
  const decreaseFontBtn = document.getElementById("decreaseFontBtn");
  const categoryRadios = document.querySelectorAll('input[name="category"]');


  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function() {
    category = document.querySelector(".category");
    category.classList.toggle("active");
  }
  


let currentCategory = "science";
let currentQuoteIndex = 0;
let currentFontSize = 26;

function updateQuote() {
    categoryElement.textContent = `${currentCategory.charAt(0).toUpperCase()+ currentCategory.slice(1)} Quote`;
    quoteElement.textContent = quotes[currentCategory][currentQuoteIndex];
}

  function changeCategory(event) {
    currentCategory = event.target.value;
    currentQuoteIndex = 0;
    updateQuote();
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function increaseFontSize() {
    currentFontSize += 2;
    quoteElement.style.fontSize = `${currentFontSize}px`;
    fontSizeElement.textContent = currentFontSize;
  }
  
  function decreaseFontSize() {
    currentFontSize -= 2;
    quoteElement.style.fontSize = `${currentFontSize}px`;
    fontSizeElement.textContent = currentFontSize;
  }
  
  function shuffleCategories() {
    const categories = Object.keys(quotes);
    currentCategory = categories[Math.floor(Math.random() * categories.length)];
    currentQuoteIndex = 0;
    updateQuote();
}

  prevBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    updateQuote();
  });
  
  nextBtn.addEventListener("click", () => {
    
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    updateQuote();
  });

  
  randomBtn.addEventListener("click", () => {
    shuffleCategories();
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    updateQuote();
  });
  
  darkModeToggle.addEventListener("change", toggleDarkMode);
  
  increaseFontBtn.addEventListener("click", increaseFontSize);
  decreaseFontBtn.addEventListener("click", decreaseFontSize);
  
  categoryRadios.forEach(radio => {
    radio.addEventListener("change", changeCategory);
  });  
  updateQuote();
  
  