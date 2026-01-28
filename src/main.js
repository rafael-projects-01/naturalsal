// Load Vturb SmartPlayer script
function loadVturbPlayer() {
  const script = document.createElement('script');
  script.src = 'https://scripts.converteai.net/6c30908d-7cf0-412e-a3ad-69e09dc21eae/players/69793616ba592bac61ffb251/v4/player.js';
  script.async = true;
  document.head.appendChild(script);
}

// Fetch user's city from IP and update dynamic city elements
async function updateDynamicCity() {
  const cityElements = document.querySelectorAll('.dynamic-city');

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    if (data.city) {
      cityElements.forEach(el => {
        el.textContent = data.city;
      });
    }
  } catch (error) {
    console.error('Failed to fetch location:', error);
    // Keep default "sua cidade" text on error
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadVturbPlayer();
  updateDynamicCity();
});
