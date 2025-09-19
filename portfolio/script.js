// Horizontal slider
const container = document.querySelector('.container');
let currentIndex = 0;

// Function to go to a section (menu click)
function goToSection(index){
  currentIndex = index;
  container.style.transform = `translateX(-${index*100}vw)`;
}

// Optional: Keyboard navigation (Arrow Left/Right)
document.addEventListener('keydown', function(e){
  if(e.key === "ArrowRight"){
    if(currentIndex < container.children.length -1){
      currentIndex++;
      container.style.transform = `translateX(-${currentIndex*100}vw)`;
    }
  }
  if(e.key === "ArrowLeft"){
    if(currentIndex > 0){
      currentIndex--;
      container.style.transform = `translateX(-${currentIndex*100}vw)`;
    }
  }
});

// Contact form submission
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting me!');
    form.reset();
  });
}
