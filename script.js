
document.getElementById('colorButton').addEventListener('click', () => {
  document.body.style.backgroundColor = '#f0f8ff';
  document.getElementById('changeText').textContent = 'You clicked the button!';
});

document.getElementById('colorButton').addEventListener('dblclick', () => {
  alert('🎉 Secret double-click discovered!');
});

document.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
});

document.querySelector('.accordion-toggle').addEventListener('click', () => {
  const content = document.querySelector('.accordion-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

const images = [
  'https://via.placeholder.com/300/FF5733',
  'https://via.placeholder.com/300/33FF57',
  'https://via.placeholder.com/300/3357FF'
];
let imgIndex = 0;
function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[imgIndex];
}

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('formFeedback');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = '❌ Invalid email format';
    return;
  }
  if (password.length < 8) {
    feedback.textContent = '❌ Password must be at least 8 characters';
    return;
  }
  feedback.textContent = '✅ Form submitted successfully!';
});
