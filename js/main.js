
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



fetch ('https://jsonplaceholder.typicode.com/posts')
  .then( (res) => res.json() )
  .then( (res) => {
    console.log( data[0].title )
    console.log( data[0].body )
  });

const lista = document.getElementById("contenedor-productos");

fetch ('https://jsonplaceholder.typicode.com/posts')
  .then( (res) => res.json() )
  .then( (data) => {

    data.forEach( post => {
      const div = document.createElement("div");
      div.innerHTML = ` <h4>${post.title}</h4>
                        <p>${post.body}</p>
                      `
      contenedor.append(div)
      
    });
});




const img = document.getElementById ("on-click");

img.addEventListener("click", () => {
  swal({
    title: "BIENVENIDO!",
    text: "Te contamos nuestra historia!",
    icon: "succes",
    confirm: "Vamos!"
  })
})


