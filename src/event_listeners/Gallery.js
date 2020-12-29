import { addEntryToDB } from "../../database.js";
function GalleryEventListener(
  imageForm,
  displayImageButton,
  addImageContainer,
  body,
  cancelImageFormButton,
  file,
  fileDescription,
  galleryContainer
) {
  imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    file = file.files[0];
    let description = fileDescription.value
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);


    fileReader.addEventListener("load", () => {
      let entry = {
        file: fileReader.result,
        description,
      };
      //add to gallery container
      galleryContainer.innerHTML = `
          <div class="image-container">
              <img src="${fileReader.result}" alt="" >
              <div class="img-desc">
                  <h3>${description}</h3>
              </div>
          </div>
      ` + galleryContainer.innerHTML
      addEntryToDB("gallery", entry);
    });
  });

  displayImageButton.addEventListener("click", () => {
    addImageContainer.classList.add("form-display");
    window.scrollTo(0, 0);
    body.classList.add("overlay-body");
    // remove form
    cancelImageFormButton.onclick = () => {
      addImageContainer.classList.remove("form-display");
      body.classList.remove("overlay-body");
    };
  });
}

export default GalleryEventListener;
