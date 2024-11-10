import Image from 'next/image';
import styles from "../headerabout/headerabout.module.css"
import abcimg from "../public/abc.jpeg"

const AboutSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={abcimg}
                    alt="About Me" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className={styles.content}>
                <h2>About Me</h2>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident magnam amet aut autem vel modi mollitia itaque, eligendi ipsa iure, pariatur assumenda dolore laboriosam reprehenderit placeat recusandae laudantium esse!aaa
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident magnam amet aut autem vel modi mollitia itaque, eligendi ipsa iure, pariatur assumenda dolore laboriosam reprehenderit placeat recusandae laudantium esse!aa
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident magnam amet aut autem vel modi mollitia itaque, eligendi ipsa iure, pariatur assumenda dolore laboriosam reprehenderit placeat recusandae laudantium esse!aa
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
