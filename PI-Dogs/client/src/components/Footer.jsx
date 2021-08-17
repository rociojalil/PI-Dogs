import React from 'react'
import styles from './Footer.module.css'



function Footer() {
    return (
        <div className={styles.mainFooter}>
            <div className={styles.about}>
                <p>
                    Dogs App
                </p>
            </div>
            <div className={styles.contactMe}>
                <p>Contact me</p>
            </div>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>

            <div class={styles.socialMedia}>
			    <a href="https://www.linkedin.com/in/rocio-de-luz-jalil/"
                 rel='noreferrer' target="_BLANK" className={styles.socialMediaIcon}>
                <i class='bx bxl-linkedin' ></i>
			    </a>
			    <a href="https://github.com/rociojalil" 
                rel='noreferrer' target="_BLANK" className={styles.socialMediaIcon}>
                <i class='bx bxl-github'></i>
				</a>
			    <a href="mailto:rojalilparedes@gmail.com" className={styles.socialMediaIcon}>
				<i class='bx bx-mail-send'></i>
			</a>
			</div>
		</div>
    )
}

export default Footer
