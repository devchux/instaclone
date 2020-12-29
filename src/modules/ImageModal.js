function ImageModal() {
    return `
    <div class="add-image-container">
        <div class="add-image">
            <form enctype="multipart/form-data" method="post">
                <h2>Add an image</h2>
                <input type="file" placeholder="Enter file here..." id="file" name="file">
                <textarea rows="5" placeholder="Description" id="file-description" name="file-description"></textarea>
                <button type="submit">submit</button>
                <button type="button" id="cancel-image-form">cancel</button>
            </form>
        </div>
    </div>
    `
}

export default ImageModal
