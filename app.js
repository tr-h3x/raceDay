et raceNumber = Math.floor(Math.random() * 1000);

earlyRunner = true;

runnerAge = 18;

if (runnerAge > 18 && earlyRunner) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRunner) {
  console.log(`Your race number is ${raceNumber}. Race is at 9:30.`);
} else if (runnerAge > 18 && !earlyRunner) {
    console.log(`Your race number is ${raceNumber}. Because of your lack of punctuality, your race is at 11:00.`);
} else if (runnerAge < 18) {
    console.log(`Due to your lack of age, your race will begin at 12:30. Good luck number ${raceNumber}!`);
} else {
  console.log('Report to the bureaucrats, and don\'t forget to sign up for "Selective Service".')
}