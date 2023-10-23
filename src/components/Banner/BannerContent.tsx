import { FC } from 'react'
import Image from 'next/image'
import { datePath } from '@/constants/imagePaths'
import styles from '@/components/Banner/Banner.module.scss'

const BannerContent: FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Hello <span>Trädgår'n</span></div>
      <div className={styles.date}>
        <span className={`${styles.dateIcon} icon`}>
          <Image
            src={datePath}
            width={20}
            height={20}
            loading='eager'
            alt='Date'
            priority
          />
        </span>
        <span className={styles.dateText}>26 September</span>
      </div>
    </div>
  )
}

export default BannerContent