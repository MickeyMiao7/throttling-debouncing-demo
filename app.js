const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const args = arguments;
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  let lastFunc;
  let lastRanTime;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      lastRanTime = Date.now();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
    else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        func.apply(context, args);
      }, limit - (Date.now() - lastRanTime))
    }
  };
}

const log = (node, text, _class) => {
  return () => {
    let element = document.createElement('p');
    element.innerText = `${new Date().toUTCString()} - ${text}`;
    element.classList.add(_class);
    node.appendChild(element);
  };
};

const btnDebounce = document.querySelector('#debounce');
const btnThrottle = document.querySelector('#throttle');
const logNode = document.querySelector('#log');
const timeNode = document.querySelector('#time');
const logTime = (function (){
  timeNode.innerText =  new Date().toUTCString();
  return arguments.callee;
})();


setInterval(logTime, 1000);
btnDebounce.addEventListener('click', debounce(log(logNode, 'DEBOUNCE', 'debounce') , 3000));
btnThrottle.addEventListener('click', throttle(log(logNode, 'THROTTLE', 'throttle') , 3000));