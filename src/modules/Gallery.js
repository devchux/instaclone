import { getEntryFromDB } from '../../database.js'
async function Gallery() {
    const data = await getEntryFromDB('gallery')
    const galleryList = data.length === 0 ? '<p style="text-align:center;">Loading...</p>' : data.map(item => {
        return `
        <div class="image-container">
            <img src=${item.file} alt="" >
            <div class="img-desc">
                <h3>${item.description}</h3>
            </div>
        </div>
        `
    }).reverse().join('')
    return `
        <div class="gallery-container">
            ${galleryList}
        </div>
            <button type="button" id="add-image-button">&plus;</button>
    `
}

export default Gallery
