import { addEntryToDB, clearEntriesInDB } from '../../database.js'
function ProfileEventListener(profileForm, nameOutput, descriptionOutput, nameInput, descriptionInput, editButton, profileEditorContainer, body, cancelProfileFormButton) {
    profileForm.addEventListener('submit', e => {
        e.preventDefault()
        clearEntriesInDB('profile')
        addEntryToDB('profile', {name: nameInput.value, description: descriptionInput.value})
        nameOutput.innerHTML = nameInput.value
        descriptionOutput.innerHTML = descriptionInput.value
    })
    
    editButton.addEventListener('click', () => {
        profileEditorContainer.classList.add('form-display')
        body.classList.add('overlay-body')
        // remove form
        cancelProfileFormButton.onclick = () => {
            profileEditorContainer.classList.remove('form-display')
            body.classList.remove('overlay-body')
        }
    })
}

export default ProfileEventListener