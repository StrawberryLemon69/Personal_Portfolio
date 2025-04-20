const sidebarToggle = document.getElementById('link_button');
const sidebar = document.getElementById('sidenav');
const lines = document.getElementById('hamburger_icon')

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  lines.classList.toggle('activeX');
});
    
    
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
    sidebar.classList.remove('active');
    lines.classList.remove('activeX')
  }
});    

const card1 = document.querySelector(".title.x1");
const card2 = document.querySelector(".about.x2");
const btn1 = document.querySelector(".home1");
const btn2 = document.querySelector(".about1");
const btn3 = document.querySelector(".home2");
const btn4 = document.querySelector(".about2");

btn1.addEventListener("click", function() {
    card1.classList.add("active1");
    card2.classList.remove("active2");
});

btn2.addEventListener("click", function() {
    card2.classList.add("active2");
    card1.classList.remove("active1");
});

btn3.addEventListener("click", function() {
    card1.classList.add("active1");
    card2.classList.remove("active2");
});

btn4.addEventListener("click", function() {
    card2.classList.add("active2");
    card1.classList.remove("active1");
});
    

const progressCircle = document.querySelector('.progress-circle');
const progressText = document.querySelector('.progress-text');
const progress = 75; 
const circumference = 2 * Math.PI * progressCircle.r.baseVal.value;

progressCircle.style.strokeDasharray = `${circumference * progress / 100} ${circumference}`;

progressText.innerText = `${progress}%`;
<!--  -->
const progressCircle2 = document.querySelector('.progress-circle2');
const progressText2 = document.querySelector('.progress-text2');
const progress2 = 40;
const circumference2 = 2 * Math.PI * progressCircle2.r.baseVal.value;

progressCircle2.style.strokeDasharray = `${circumference2 * progress2 / 100} ${circumference2}`;

progressText2.innerText = `${progress2}%`;
<!--  -->
const progressCircle3 = document.querySelector('.progress-circle3');
const progressText3 = document.querySelector('.progress-text3');
const progress3 = 36; // set progress value between 0 and 100
const circumference3 = 2 * Math.PI * progressCircle3.r.baseVal.value;

progressCircle3.style.strokeDasharray = `${circumference3 * progress3 / 100} ${circumference3}`;

progressText3.innerText = `${progress3}%`;
<!--  -->
const progressCircle4 = document.querySelector('.progress-circle4');
const progressText4 = document.querySelector('.progress-text4');
const progress4 = 30;
const circumference4 = 2 * Math.PI * progressCircle4.r.baseVal.value;

progressCircle4.style.strokeDasharray = `${circumference4 * progress4 / 100} ${circumference4}`;

progressText4.innerText = `${progress4}%`;

const skillCards = document.querySelectorAll('.card');

window.addEventListener('scroll', skCardFunc);

skCardFunc();

function skCardFunc() {
    const vpHeight = window.innerHeight;
    
    skillCards.forEach((skCardss) => {
        const cardsPos = skCardss.getBoundingClientRect().top;
        if (cardsPos < vpHeight) {
           skCardss.style.opacity = "1";
           skCardss.classList.add('glide');
        } else {
           skCardss.style.opacity = "0";
           skCardss.classList.remove('glide');
        }
    });
}

function filterCategory(category) {
        
        var projectCards = document.querySelectorAll(".proj_card");
        
        projectCards.forEach(function(card) {
          if (category === "all") {
            
            card.style.display = "block";
          } else if (card.dataset.category === category) {
            
            card.style.display = "block";
          } else {
          
            card.style.display = "none";
          }
        });
      } 
      
const boxes = document.querySelectorAll('.service_header');
var innerHead = document.querySelector(".inner_head");
var elements = document.querySelectorAll(".ball1, .ball2, .ball3, .ball4, .line1, .line2");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;         
    if (boxTop < triggerBottom) {      
      innerHead.style.height = "90%";
      innerHead.style.width = "90%";
  
    elements.forEach((element) => {
      element.style.opacity = "1";
  });
  
    } else {
      innerHead.style.height = "100%";
      innerHead.style.width = "100%";
  
    elements.forEach((element) => {
      element.style.opacity = "0";
  });       
    }
  });
}
