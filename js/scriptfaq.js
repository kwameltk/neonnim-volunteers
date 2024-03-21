let questions = document.querySelectorAll('.faq')

questions.forEach(x => {
   x.addEventListener('click' , () => {
       x.classList.toggle('active')
   }) 
});

