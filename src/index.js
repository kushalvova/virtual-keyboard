import './index.html';
import './styles.scss';

const KEYS = [
  [
    ['Backquote', '`', '~', 'ё', 'Ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Backslash', '\\', '|', '\\', '/'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLk', 'CapsLk', 'CapsLk', 'CapsLk'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', "'", '"', 'э', 'Э'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['Comma', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const container = document.querySelector('.page');
container.insertAdjacentHTML('beforeend', `<header>
                                            <h1 class="title">RSS Virtual Keyboard</h1>
                                          </header>
                                          <main class="main">
                                            <textarea autofocus class="input-text"></textarea>
                                            <div class="keyboard"></div>
                                            <p class="description">Keyboard created in Windows</p>
                                            <p class="description">Switch language: left ctrl + left alt</p>  
                                          </main>`);

const KEYBOARD = document.querySelector('.keyboard');
const INPUT = document.querySelector('.input-text');
let language = 0;
let isCaps = false;
INPUT.value = '';

if (localStorage.getItem('language')) language = +localStorage.getItem('language');

function getInsert(str, substr, pos) {
  const array = str.split('');
  array.splice(pos, 0, substr);
  return array.join('');
}

function getDelete(str, shift, pos) {
  const array = str.split('');
  array.splice(pos + shift, 1);
  return array.join('');
}

function getActivKey(keyUP) {
  const BUTTOM_ACTIVE = document.querySelector(`.${keyUP}`);
  BUTTOM_ACTIVE.classList.remove('buttom');
  BUTTOM_ACTIVE.classList.add('activeShift');
  BUTTOM_ACTIVE.classList.add('activeShift_active');
}

function getKeyboard(symbolSelection, shiftUP = false, capsUp = false) {
  KEYBOARD.innerHTML = '';
  KEYS.forEach((arr) => {
    KEYBOARD.insertAdjacentHTML('beforeend', '<div class="row"></div>');
    arr.forEach((element) => {
      const ROW = KEYBOARD.lastChild;
      ROW.insertAdjacentHTML('beforeend', `<div class="buttom ${element[0]}">${element[symbolSelection]}</div>`);

      const key = document.querySelector(`.${element[0]}`);
      if (element[0] === 'Backspace') {
        key.addEventListener('click', () => {
          const CURSOR = INPUT.selectionStart;
          INPUT.value = getDelete(INPUT.value, -1, CURSOR);
          INPUT.setSelectionRange(CURSOR - 1, CURSOR - 1);
          INPUT.focus();
        });
      } else if (element[0] === 'Enter') {
        key.addEventListener('click', () => {
          const CURSOR = INPUT.selectionStart;
          INPUT.value = getInsert(INPUT.value, '\n', CURSOR);
          INPUT.setSelectionRange(CURSOR + 1, CURSOR + 1);
          INPUT.focus();
        });
      } else if (element[0] === 'Tab') {
        key.addEventListener('click', () => {
          const CURSOR = INPUT.selectionStart;
          INPUT.value = getInsert(INPUT.value, '\u0009', CURSOR);
          INPUT.setSelectionRange(CURSOR + 1, CURSOR + 1);
          INPUT.focus();
        });
      } else if (element[0] === 'Delete') {
        key.addEventListener('click', () => {
          const CURSOR = INPUT.selectionStart;
          INPUT.value = getDelete(INPUT.value, 0, CURSOR);
          INPUT.setSelectionRange(CURSOR, CURSOR);
          INPUT.focus();
        });
      } else if (element[0] === 'ShiftRight' || element[0] === 'ShiftLeft') {
        key.addEventListener('mousedown', (event) => {
          const shiftActive = event.target.classList[1];
          getKeyboard(language + 2, shiftActive);
          INPUT.focus();
        });
        key.addEventListener('mouseup', () => {
          getKeyboard(language + 1);
          INPUT.focus();
        });
      } else if (element[0] === 'ControlRight' || element[0] === 'ControlLeft') {
        INPUT.focus();
      } else if (element[0] === 'AltRight' || element[0] === 'AltLeft') {
        INPUT.focus();
      } else if (element[0] === 'MetaLeft') {
        INPUT.focus();
      } else if (element[0] === 'CapsLock') {
        key.addEventListener('click', () => {
          if (capsUp) getKeyboard(language + 1, false, !capsUp);
          else getKeyboard(language + 2, false, !capsUp);
          isCaps = !capsUp;
          INPUT.focus();
        });
      } else {
        key.addEventListener('click', () => {
          const CURSOR = INPUT.selectionStart;
          INPUT.value = getInsert(INPUT.value, `${element[symbolSelection]}`, CURSOR);
          INPUT.setSelectionRange(CURSOR + 1, CURSOR + 1);
          INPUT.focus();
        });
      }
    });
  });
  if (shiftUP) getActivKey(shiftUP);
  if (capsUp) getActivKey('CapsLock');
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    if (isCaps) getKeyboard(language + 1, false, !isCaps);
    else getKeyboard(language + 2, false, !isCaps);
    isCaps = !isCaps;
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    const CURSOR = INPUT.selectionStart;
    INPUT.value = getInsert(INPUT.value, '\u0009', CURSOR);
    INPUT.setSelectionRange(CURSOR + 1, CURSOR + 1);
    INPUT.focus();
  }
  if (event.code === 'AltRight' || event.code === 'AltLeft') {
    event.preventDefault();
    INPUT.focus();
  }
});

function getKeyboardUp(registerSelection) {
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      getKeyboard(registerSelection + 1);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      getKeyboard(registerSelection + 2);
      getActivKey(`${event.code}`);
    }
  });
}

document.addEventListener('keyup', (event) => {
  const BUTTOM_ACTIVE = document.querySelector(`.${event.code}`);
  if (BUTTOM_ACTIVE) BUTTOM_ACTIVE.classList.remove('buttom_active');
});
document.addEventListener('keydown', (event) => {
  const BUTTOM_UNACTIVE = document.querySelector(`.${event.code}`);
  if (BUTTOM_UNACTIVE) BUTTOM_UNACTIVE.classList.add('buttom_active');
});

getKeyboard(language + 1);
getKeyboardUp(language);

function changeTheLanguage(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft' || event.code === 'AltLeft') {
      pressed.add(event.code);
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ControlLeft' || event.code === 'AltLeft') {
      if (pressed.has(codes[0]) && pressed.has(codes[1])) func();
      pressed.delete(event.code);
      if (event.code === 'ControlLeft') {
        const BUTTOM_UNACTIVE = document.querySelector('.AltLeft');
        BUTTOM_UNACTIVE.classList.add('buttom_active');
      }
      if (event.code === 'AltLeft') {
        const BUTTOM_UNACTIVE = document.querySelector('.ControlLeft');
        BUTTOM_UNACTIVE.classList.add('buttom_active');
      }
    }
    if (pressed.size === 0) {
      const CONTROL_BUTTON = document.querySelector('.ControlLeft');
      const ALT_BUTTON = document.querySelector('.AltLeft');

      if (CONTROL_BUTTON.classList.contains('buttom_active')) CONTROL_BUTTON.classList.remove('buttom_active');
      if (ALT_BUTTON.classList.contains('buttom_active')) ALT_BUTTON.classList.remove('buttom_active');
    }
  });
}

changeTheLanguage(
  () => {
    if (language === 0) language = 2;
    else language = 0;
    localStorage.setItem('language', language);
    getKeyboard(language + 1);
    getKeyboardUp(language);
  },
  'ControlLeft',
  'AltLeft',
);
