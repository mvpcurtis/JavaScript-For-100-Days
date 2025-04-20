console.log('Connected.');

const quoteField = document.querySelector('p#quote');
const generateBtn = document.querySelector('button');

let lastRandom = null;

const arrOfQuotes = [
  {
    quote: 'If I cannot do great things, I can do small things in a great way.',
    author: 'Martin Luther King, Jr.',
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James, American philosopher and psychologist',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Ghandi',
  },
  {
    quote: "Don't sit down and wait for the opportunities to come. Get up and make them.",
    author: 'Madam C.J. Walker, American entrepreneur and activist',
  },
  {
    quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
    author: 'Thomas Edison',
  },
  {
    quote: 'The most difficult thing is the decision to act; the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    author: 'Michael Altshuler, American author and motivational speaker',
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: 'Jimmy Dean',
  },
  {
    quote: 'It is often the small steps, not the giant leaps, that bring about the most lasting change.',
    author: 'Queen Elizabeth II',
  },
  {
    quote: "If what you have done yesterday still looks big to you, you haven't done much today.",
    author: 'Mikhail Gorbachev',
  },
];

const removeFromDOM = () => {
  if (document.querySelector('#quote') && document.querySelector('#author')) {
    quoteEl.remove();
    authorEl.remove();
  }
};

const adjustDOM = (number) => {
  removeFromDOM();
  document.querySelector('.quotes').style.display = 'block';
  document.querySelector('section > span').style.display = 'block';
  quoteEl = document.createElement('p');
  quoteEl.id = 'quote';
  quoteEl.textContent = '"' + arrOfQuotes[number].quote + '"';
  document.querySelector('.quotes').appendChild(quoteEl);
  authorEl = document.createElement('span');
  authorEl.id = 'author';
  authorEl.textContent = '— ' + arrOfQuotes[number].author;
  document.querySelector('.quotes').appendChild(authorEl);
};

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

const generateQuote = () => {
  let newRandom = undefined;
  const maxIndex = arrOfQuotes.length;
  do {
    newRandom = randomNum(maxIndex);
  } while (newRandom === lastRandom && maxIndex > 1);
  lastRandom = newRandom;
  console.log(newRandom);
  adjustDOM(newRandom);
};

generateBtn.addEventListener('click', generateQuote);
