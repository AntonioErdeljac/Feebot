import PreactDOM from 'preact-dom';
import Preact from 'preact';

document.addEventListener('DOMContentLoaded', () => {
  PreactDOM.render(
    Preact.createElement(Counter),
    document.getElementById('mount'),
  );
});
