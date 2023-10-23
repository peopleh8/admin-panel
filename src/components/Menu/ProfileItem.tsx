import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '@/components/Menu/Menu.module.scss'

const ProfileItem: FC = () => {
  const router = useRouter()

  return (
    <div className={styles.profile}>
      <Link 
        className={`${styles.profileLink} ${router.pathname === '/profile' ? styles.profileActive : ''}`} 
        href='/profile/'
      >
        <div className={`${styles.profilePhoto} icon`}>
          <Image
            src='/assets/images/menu-profile.png'
            width={53}
            height={53}
            loading='eager'
            alt='Profile'
            priority
          />
        </div>
        <div className={styles.profileinfo}>
          <div className={styles.profileName} data-text={"Trädgår'n"}>Trädgår'n</div>
          <div className={styles.profileType}>Nightclub</div>
        </div>
      </Link>
    </div>
  )
}

export default ProfileItem