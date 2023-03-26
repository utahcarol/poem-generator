const submitButton = document.getElementById('submitButton');
const wordInput = document.getElementById('wordInput');
const result = document.getElementById('result');

submitButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const word = wordInput.value;

  try {
    const response = await fetch(`https://YOUR_FUNCTION_URL?word=${encodeURIComponent(word)}`);

    const poem = await response.text();
    result.textContent = poem;
  } catch (error) {
    console.error('Error fetching poem:', error);
    result.textContent = 'Sorry, there was an error generating your poem. Please try again later.';
  }
});
