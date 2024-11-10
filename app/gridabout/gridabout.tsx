import Image from 'next/image';
import styles from '../gridabout/gridabout.module.css'
import t1 from "../public/t1.webp"
import t2 from "../public/t2.webp"
import t3 from "../public/t3.jpg"
import t4 from "../public/t4.jpg"
import t5 from "../public/t5.webp"
import t6 from "../public/t6.jpg"

const ImageGrid = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.imageContainer}>
                <Image src={t1} alt="Image 1" layout="responsive" width={400} height={300} />
                
            </div>
            <div className={styles.imageContainer}>
                <Image src={t2} alt="Image 2" layout="responsive" width={400} height={300} />
        
            </div>
            <div className={styles.imageContainer}>
                <Image src={t3} alt="Image 3" layout="responsive" width={400} height={300} />
            
            </div>
            <div className={styles.imageContainer}>
                <Image src={t4} alt="Image 4" layout="responsive" width={400} height={300} />
        
            </div>
            <div className={styles.imageContainer}>
                <Image src={t5} alt="Image 5" layout="responsive" width={400} height={300} />

            </div>
            <div className={styles.imageContainer}>
                <Image src={t6} alt="Image 6" layout="responsive" width={400} height={300} />
    
            </div>
        </div>
    );
};

export default ImageGrid;
