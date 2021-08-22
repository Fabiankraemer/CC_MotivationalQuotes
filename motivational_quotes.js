// quote container
const goodStart = [
  'You are looking great today!',
  'Sun is shining!',
  'You look energized!',
  "It's a new day of opportunities!",
  'Had a good sleep?',
];
const badStart = [
  'Rough night?',
  'Difficulties getting motivated?',
  "You don't look rested.",
  'Dealing with some shit?',
  'Having negative thoughts?',
];
const neutralStart = [
  "It's time to get up!",
  'Wake up!',
  'Are you ready for a new day?',
  'Awake, yet?',
  'Hey there!',
];
const motivationStart = [goodStart, badStart, neutralStart];

const motivationMid = [
  ['1', "Reflect on yesterday's success"],
  ['1', 'Use the momentum'],
  ['1', 'Use the good energy'],
  ['1', 'Stay positive'],
  ['2', 'Forget about yesterday'],
  ['2', 'Raise your head again'],
  ['2', 'Leave the negativity behind'],
  ['2', "Don't start your day with negative thoughts"],
  ['1 2', "It's time to get going"],
  ['1 2', 'Get a coffee'],
  ['1 2', 'Get a snack'],
  ['1 2', 'Grab your clothes'],
  ['1 2 3', 'Take a deep breath'],
  ['1 2 3', 'Start your day with positive thoughts'],
  ['1 2', 'Keep your head high'],
  ['1 2 3', 'Get up, Friend'],
];

const motivationEnd = [
  'and make today count!',
  'and be your best self today!',
  "and show 'em how it's done!",
  "and make someone else's day!",
  'and get your work done!',
  'and enjoy the little things!',
  'and go work out!',
  'and do something special today!',
  'and love every second of the day!',
  'and go for a run!',
];

// random index picker
function rndPos(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getMotivated() {
  const finalQuote = [];
  // get start of Quote
  const selector = rndPos(motivationStart);
  function getStartQuote() {
    const startQuote = motivationStart[selector];
    finalQuote.push(startQuote[rndPos(startQuote)]);
  }
  function getMidQuote() {
    const midQuote = motivationMid[rndPos(motivationMid)];
    if (midQuote[0].includes(selector + 1)) {
      finalQuote.push(midQuote[1]);
    } else {
      getMidQuote();
    }
  }
  getStartQuote();
  getMidQuote();

  // get end of quote
  finalQuote.push(motivationEnd[rndPos(motivationEnd)]);
  // return quote
  return finalQuote.join(' ');
}

console.log(getMotivated());
