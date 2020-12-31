import { getEntryFromDB } from '../../database.js'
const About = async () => {
    let userInfo = await getEntryFromDB('profile')
    return `
        <section class="about">
            <div class="profile-image">
                <img src="src/assets/images/user-info.png" alt="User Pix">
            </div>
            <div class="user-info">
                <div class="username">
                    <h3>${userInfo.length ? userInfo[0].name : '...'}</h3>
                </div>
                <div class="description">
                    <p>${userInfo.length ? userInfo[0].description : '...'}</p>
                </div>
                <div class="button">
                    <div class="follow-btn">
                        <button type="file">connect</button>
                    </div>
                    <div class="edit-btn">
                        <button>Edit</button>
                    </div>
                </div>
            </div>
        </section>   
    `
}

export default About
