const textArea = document.querySelector('textarea');

textArea.addEventListener('input', function() {
  textArea.style.height = `${textArea.scrollHeight}px`;
});
