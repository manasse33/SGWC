
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        nav.classList.remove('active');
    });
});

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const homeSection = document.querySelector('.home');

window.addEventListener('scroll', () => {
  
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }


    const offset = window.pageYOffset;
    homeSection.style.backgroundPositionY = `${offset * 0.5}px`;

   
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);


// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
    
//         const submitButton = this.querySelector('button[type="submit"]');
//         submitButton.innerHTML = 'Envoi en cours...';
//         submitButton.disabled = true;
        
        
//         setTimeout(() => {
//             submitButton.innerHTML = 'Message envoyé !';
//             submitButton.style.backgroundColor = '#27ae60';
            
            
//             this.reset();
            
            
//             setTimeout(() => {
//                 submitButton.innerHTML = 'Envoyer';
//                 submitButton.disabled = false;
//                 submitButton.style.backgroundColor = '';
//             }, 3000);
//         }, 1500);
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});


function sendToWhatsApp() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    // var formation = document.getElementById("formation").value;
    // var horaire = document.getElementById("horaire").value;

    var phone = "242067571100"; // Numéro sans le "+"


    var message =
      "Bonjour, je m'appelle " + name +
      " (" + email + ") et je souhaite m'inscrire à la formation anglaisecettee année " ;

    var whatsappURL = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    // Rediriger vers WhatsApp
    window.open(whatsappURL, "_blank");
  }


  function toggleForm(e) {
    if (e) e.preventDefault(); // évite de suivre le lien ou de soumettre le formulaire
  
    const form = document.getElementById('slideUpForm');
    form.classList.toggle('show');
  }
  
  function toggleForm1(e) {
    if (e) e.preventDefault(); // évite de suivre le lien ou de soumettre le formulaire
  
    const form = document.getElementById('slideUpForm1');
    form.classList.toggle('show');
  }

  function toggleForm2(e) {
    if (e) e.preventDefault(); // évite de suivre le lien ou de soumettre le formulaire
  
    const form = document.getElementById('slideUpForm2');
    form.classList.toggle('show');
  }
  
  

 
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwK5Lx2abo82dRHu-NTROBNyvCQ34KfLbJDb5CSpx32CpB8-0EQXvRNWH1kC0arvbvzKw/exec"; // Remplace avec ton URL
    const form = e.target;

    const formData = new FormData(form);
    const loader = document.getElementById('loader');
    // const successMsg = document.getElementById('success-message');
    const submitBtn = document.getElementById('button');
  
    // 1. Afficher le loader
    loader.style.display = 'block';
    // successMsg.style.display = 'none';
    submitBtn.disabled = false;
  

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
    .then(result=>{
      
      loader.style.display = 'none';
      submitBtn.disabled = false;

      const confirmation= document.getElementById('confirmationMessage');
      confirmation.classList.add("active"); setTimeout(()=>{
        confirmation.classList.remove("active")
      },3000);
      form.reset();
    })
    
      
      .catch(error => {
        alert("❌ Une erreur s’est produite.");
        console.error("Erreur:", error);
      });
  });

  
  document.getElementById("contactForm1").addEventListener("submit", function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwK5Lx2abo82dRHu-NTROBNyvCQ34KfLbJDb5CSpx32CpB8-0EQXvRNWH1kC0arvbvzKw/exec"; // Remplace avec ton URL
    const form = e.target;

    const formData = new FormData(form);
    const loader = document.getElementById('loader');
    // const successMsg = document.getElementById('success-message');
    const submitBtn = this.querySelector('button');
  
    // 1. Afficher le loader
    loader.style.display = 'block';
    // successMsg.style.display = 'none';
    submitBtn.disabled = false;

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
    .then(result=>{
      loader.style.display = 'none';
      submitBtn.disabled = false;
      const confirmation= document.getElementById('confirmationMessage1');
      confirmation.classList.add("active"); setTimeout(()=>{
        confirmation.classList.remove("active")
      },3000);
      form.reset();
    })
    
      
      .catch(error => {
        alert("❌ Une erreur s’est produite.");
        console.error("Erreur:", error);
      });
  });

  
  document.getElementById("contactForm2").addEventListener("submit", function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbwK5Lx2abo82dRHu-NTROBNyvCQ34KfLbJDb5CSpx32CpB8-0EQXvRNWH1kC0arvbvzKw/exec"; // Remplace avec ton URL
    const form = e.target;

    const formData = new FormData(form);
    const loader = document.getElementById('loader');
    // const successMsg = document.getElementById('success-message');
    const submitBtn = this.querySelector('button');
  
    // 1. Afficher le loader
    loader.style.display = 'block';
    // successMsg.style.display = 'none';
    submitBtn.disabled = false;

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
    .then(result=>{
      loader.style.display = 'none';
      submitBtn.disabled = false;
      const confirmation= document.getElementById('confirmationMessage2');
      confirmation.classList.add("active"); setTimeout(()=>{
        confirmation.classList.remove("active")
      },3000);
      form.reset();
    })
    
      
      .catch(error => {
        alert("❌ Une erreur s’est produite.");
        console.error("Erreur:", error);
      });
  });

  


  