function ProfileModal() {
    return `
        <div class="profile-editor-container">
            <div class="profile-editor">
                <form>
                    <h2>Edit Profile</h2>
                    <input type="text" placeholder="Enter name here..." id="name" name="name" >
                    <textarea rows="5" placeholder="Description" id="description" name="description"></textarea>
                    <button type="submit" id="submit-img-btn">submit</button>
                    <button type="button" id="cancel-form">cancel</button>
                </form>
            </div>
        </div>
    `
}

export default ProfileModal
