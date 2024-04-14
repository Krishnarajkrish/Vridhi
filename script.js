function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  //Testimonials

const data = [
  {
    id: 1,
    name: "Mohitha Sri",
    img: "./Assets/Img1.jpg",
    text:`" `+ "Best Tanjore Painting class i have attended. Sir is very patient in teaching us every detail step by step and showing us in the online class also slowly.His experience and his dedication towards teaching students is impressive.It has been a great honour to attend his class.I have previously gone to other teachers also but never experienced authentic traditional art being taught so well."+` "`,
  },
  {
    id: 2,
    name: "Devasena Elangovan",
    img: "./Assets/Img2.jpg",
    text:`" `+ "Your guidance not only imparted valuable skills but also inspired a deep appreciation for the intricate details,vibrant colors, and rich cultural heritage associated with Tanjore paintings. Your patience and encouragement throughout the learning process made it a memorable and enjoyable experience"+` "`,
  },
  {
    id: 3,
    name: "Hiranmaiyaee Ravichandran",
    img: "./Assets/Img3.jpg",
    text: `" `+"It's all starts for me. If you want to learn Thanjavur painting in the most traditional way from the scratch, you can go for it.The only pre-requiste required is the interest to learn. Not just painting, you learn bouts of values that take back for life"+` "`,
  },
  {
    id: 4,
    name: "Kavitha",
    img: "./Assets/Img4.jpg",
    text: `" `+"Sir whenever i have seen you  painting and teaching us I have always thought it's the divine blessing to be your student.So much perfection in your teaching and the selfness with which you share all the small nuances of the art is something for which I will be ever grateful to you Sir. Thanks and Gratitude Sir🙏."+` "`,
  },
  {
    id: 5,
    name: "Geetha chandrasekaran",
    img: "./Assets/Img6.jpg",
    text: `" `+"My great guru i am so happy and excited to learn this noble art from a noble teacher. He is so slefness and patient in teaching this art form and teaches all the nuiances. He is the best teacher for those who want to learn Tanjore painting in tradional way. And the best thing is he is not at all money minded.. i have seen people who teaches only for monetary benefit but my sir seriously does with great love passion and dedication for this art.. And also he is taking this art to worlwide who can't come and learn directly through his online classes.I want always to travel with him and learn this great art from my sir.my guru paranam 🙏🙏."+` "`,
  },
];
const img = document.querySelector(".ReviewerImage");
const btnNext = document.querySelector("#btn-right");
const btnPrevious = document.querySelector("#btn-left");
const name = document.querySelector(".ReviwerName");
const role = document.querySelector(".ReviewerRole");
const text = document.querySelector(".ActualReview");

let index = 0;
window.addEventListener("DOMContentLoaded", function () {
  const testimonial = data[0];
  loadTestimonial(testimonial);
});
function loadTestimonial(data) {
  img.src = data.img;
  name.textContent = data.name;
  // role.textContent = data.job;
  text.innerHTML = data.text;
}

btnNext.addEventListener("click", function () {
  index++;
  if (index > data.length - 1) {
    index = 0;
  }
  loadTestimonial(data[index]);
});
btnPrevious.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  loadTestimonial(data[index]);
});





// Function to start counting up to a target number when element comes into view
function startCounting(target, element) {
  console.log("startCounting function called");
  // Initialize counter variable
  let count = 0;

  // Calculate duration for counting based on the difference between current count and target
  const duration = Math.abs(target - count); // Calculate duration based on the difference
  
  // Function to update counter
  function updateCounter() {
      console.log("updateCounter function called");
      // Display the current count in the element
      element.textContent = count;

      // Increment count until it reaches the target
      if (count < target) {
          // Calculate the speed of counting based on the difference
          const speed = Math.max(1, Math.ceil((target - count) / 100)); // Minimum speed of 1
          count += speed;
          if (count > target) {
              count = target;
          }
          setTimeout(updateCounter, 10); // Update every 10 milliseconds for smoother animation
      }
  }

  // Start updating the counter
  updateCounter();
}

// Function to check if element is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle scroll event
function handleScroll() {
  console.log("handleScroll function called");
  const counterElements = document.querySelectorAll('.counter');

  // Iterate over each counter element
  counterElements.forEach(counterElement => {
      const section = counterElement.closest('.counter-section');
      // Check if the section is in view
      if (isInViewport(section)) {
          const target = parseInt(counterElement.getAttribute('data-target'));
          console.log("Target:", target);
          startCounting(target, counterElement);
      }
  });

  // Remove scroll event listener once counting starts to avoid repeating counting
  window.removeEventListener('scroll', handleScroll);
}

// Attach event listener to window's scroll event
window.addEventListener('scroll', handleScroll);




//AOS animation
AOS.init();


//Typed js

var typed = new Typed('#element', {
  strings: [' Preserving the Legacy of Tanjore Painting.',],
  typeSpeed: 50,
});

var typed = new Typed('#elementOne', {
  strings: ['Experience the <br> Tradition of <br> Tanjore . <img src="Assets/Vector6.png" alt="">',],
  typeSpeed: 50,
});

var typed = new Typed('#elementThree', {
  strings: ['Tanjore Painting Course -7 months.',],
  typeSpeed: 50,
});