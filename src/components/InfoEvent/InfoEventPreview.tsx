import { FC } from 'react'
import Image from 'next/image'
import { editPath } from '@/constants/imagePaths'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { openEditModalAsync } from '@/store/actions/editEventAsync'
import styles from '@/components/InfoEvent/InfoEvent.module.scss'

const InfoEventPreview: FC = () => {
  const dispatch = useTypedDispatch()
  
  const openEditModalHandler = () => {
    dispatch(openEditModalAsync())
  }
  
  return (
    <div className={styles.preview}>
      <Image
        src='/assets/images/info-event.png'
        width={662}
        height={362}
        loading='lazy'
        alt='Logo'
      />
      <div className={styles.content}>
        <span 
          className={styles.edit}
          onClick={openEditModalHandler}
        >
          <Image
            src={editPath}
            width={15}
            height={15}
            alt='Edit'
          />
        </span>
        <div className={styles.title}>Port Du Soleil</div>
        <div className={styles.date}>26 September</div>
      </div>
    </div>
  )
}

export default InfoEventPreview