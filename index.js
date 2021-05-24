  const galeria = "https://i.ibb.co/";
  let curentTransform = 0;

  const dibujo = document.querySelector('.imagen');
  let currentImages;
  let finalPosition = 0;
  let currentPosition = 0;
  const $btnPrevious = document.getElementById("btn-action-previous");
  const $btnNext = document.getElementById("btn-action-next");
  const $currentImage = document.getElementById("current-img");
  const $galeria = document.getElementById("galeria");
const imagesJson =  [
    {
     "orden":1,
     "source":"/VYMkc0s/ABCMUSEO_STUFFFF1.jpg"
    },
    {
     "orden":2,
     "source":"/fvQXH5g/AF1.jpg"
    },
    {
        "orden":3,
        "source":"/CnzTWZn/afcydh.jpg"
    },
    {
        "orden":2,
        "source":"/KKs4Wzs/Halloween_icon.jpg"
    },
    {
        "orden":2,
        "source":"/bFkFBWR/ICON-ANIMATION-FULL.gif"
    }
]

let imagenHTML = "";
imagesJson.forEach(function(imagen,index){
        
    imagenHTML+=`<img class = "img-carrusel" width = "500px" heigth: "500px" src="${galeria+imagen.source}" alt="" data-pos = ${index} >`;
    
    dibujo.innerHTML=imagenHTML;
    //console.log(imagenHTML);
});
currentImages = document.querySelectorAll(".img-carrusel");
finalPosition = currentImages.length;
 

  /* getImagesToRender().then(images => {
    let imagenHTML = "";
    images.forEach(function(imagen,index){
        
        imagenHTML+=`<img width = "500px" heigth: "500px" src="${galeria+imagen.source}" alt="" data-pos = ${index} >`;
        
        dibujo.innerHTML=imagenHTML;
        //console.log(imagenHTML);
    });
    currentImages = document.querySelectorAll("img");
    finalPosition = currentImages.length;
  }) 




    async function getImagesToRender(){
        const imagesToRenderJson = await fetch("./images.json");
        const images = imagesToRenderJson.json();
        return images;
    } */
    
    document.addEventListener("DOMContentLoaded", function(event) {
        $galeria.classList.add("is-active");
      });

    $btnPrevious.addEventListener("click", function(){
        handlePreviousAction();
       
     });

    $btnNext.addEventListener("click", function(){
        handleNextAction();
    });

    //funcions for manipulating images
    function handleNextAction(){
            //console.log(finalPosition);
            if(currentPosition < finalPosition - 1){
                curentTransform -= 100;
                dibujo.style.transform = `translateX(${curentTransform}%)`
                currentPosition++;
            }
    }  
    
    function handlePreviousAction(){
        if(currentPosition !== 0){
            curentTransform += 100;
            dibujo.style.transform = `translateX(${curentTransform}%)`
            currentPosition--;
        }
    }


  