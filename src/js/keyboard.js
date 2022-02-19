import { selectRandomElement } from './utils';
import soundOne from '../buttonsAudio/01.mp3';
import soundTwo from '../buttonsAudio/02.mp3';
import soundThree from '../buttonsAudio/03.mp3';
import soundFour from '../buttonsAudio/04.mp3';
import soundFive from '../buttonsAudio/05.mp3';

const buttons = document.getElementsByClassName('button');
const buttonSounds = [
  soundOne, soundTwo, soundThree, soundFour, soundFive,
];

function buttonSoundEffects() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      playSoundButton();
    });
  });
}

function playSoundButton() {
  const buttonSound = new Audio(selectRandomElement(buttonSounds));
  buttonSound.play();
}

export { buttonSoundEffects };