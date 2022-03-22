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

    document.addEventListener("DOMContentLoaded", async function(event) {
        
        // Create a reference with an initial file path and name
        var storage = firebase.storage();
        var pathReference = storage.ref('/Galeria');

        const allImages = await pathReference.listAll();
        const imagesNames = allImages.items.map(item => item.name).sort((a, b) => {

            const ordenA = parseInt(a.split("+")[1].split(".")[0]);
            const ordenB = parseInt(b.split("+")[1].split(".")[0]);
            
            return ordenA - ordenB;

        });
        
        await renderImagesInGallery(imagesNames, pathReference);
       
        $galeria.classList.add("is-active");
      });

      async function renderImagesInGallery(imagesReferences, pathReference){
       
        const imagesFragment = document.createDocumentFragment();
        
        for (let imageName of imagesReferences) {
            var currentReference = pathReference.child(imageName);
            const urlFromImageStorage = await currentReference.getDownloadURL();
            imagenHTML = renderImageForGallery(urlFromImageStorage);
            imagesFragment.appendChild(imagenHTML);
            finalPosition++
        }
        dibujo.appendChild(imagesFragment);
      }

      function renderImageForGallery(url){
        const image = document.createElement("img");
        image.setAttribute("src", url);
        image.setAttribute("width", "500px");
        return image;
      }

    $btnPrevious.addEventListener("click", function(event){
        handlePreviousAction();
     });


    $btnNext.addEventListener("click", function(event){
        handleNextAction();
    });


    //funcions for manipulating images
    function handleNextAction(translateIntervals = 100){
            //console.log(finalPosition);
            if(currentPosition < finalPosition - 1){
                curentTransform -= translateIntervals;
                dibujo.style.transform = `translateX(${curentTransform}%)`
                currentPosition++;
            }
    }  
    
    function handlePreviousAction(translateIntervals = 100){
        if(currentPosition !== 0){
            curentTransform += translateIntervals;
            dibujo.style.transform = `translateX(${curentTransform}%)`
            currentPosition--;
        }
    }


  