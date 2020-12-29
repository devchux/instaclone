import Nav from './modules/Nav.js'
import About from './modules/About.js'
import Footer from './modules/Footer.js'
import Gallery from './modules/Gallery.js'
import ProfileModal from './modules/ProfileModal.js'
import ImageModal from './modules/ImageModal.js'
import { request, getEntryFromDB, addEntryToDB } from '../database.js'
import GalleryEventListener from './event_listeners/Gallery.js'
import ProfileEventListener from './event_listeners/About.js'

const App = async () => {
    return `
        ${ProfileModal()}
        ${ImageModal()}
        ${Nav()}
        <div class="container">
            ${await About()}
            ${await Gallery()}
        </div>
        ${Footer()}
    `
}

request.onsuccess = async () => {
    document.getElementById('root').innerHTML = await App()

    //Event driven code
    let nameInput = document.querySelector('#name')
    let nameOutput = document.querySelector('.username > h3')
    let descriptionOutput = document.querySelector('.description > p')
    let descriptionInput = document.querySelector('#description')
    let profileForm = document.querySelector('.profile-editor > form')
    let editButton = document.querySelector('.edit-btn > button')
    let profileEditorContainer = document.querySelector('.profile-editor-container')
    let { body } = document
    let cancelProfileFormButton = document.querySelector('#cancel-form')
    let imageForm = document.querySelector(".add-image > form")
    let addImageContainer = document.querySelector('.add-image-container')
    let displayImageButton = document.querySelector('#add-image-button')
    let cancelImageFormButton = document.querySelector('#cancel-image-form')
    let file = document.querySelector('#file')
    let fileDescription = document.querySelector('#file-description')
    let galleryContainer = document.querySelector('.gallery-container')

    // execute event listeners
    GalleryEventListener(imageForm, displayImageButton, addImageContainer, body, cancelImageFormButton, file, fileDescription, galleryContainer)
    ProfileEventListener(profileForm, nameOutput, descriptionOutput, nameInput, descriptionInput, editButton, profileEditorContainer, body, cancelProfileFormButton)
}

request.onerror = () => {
    console.log('Failed to open database')
}