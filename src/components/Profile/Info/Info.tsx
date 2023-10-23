import { FC } from 'react'
import styles from '@/components/Profile/Info/Info.module.scss'
import Input from '@/components/UI/Field/Input'
import TextArea from '@/components/UI/Field/TextArea'

const Info: FC<any> = ({ register, errors }) => {
  return (
    <div className={styles.info}>
      <div className={styles.name}>Trädgår'n</div>
      <div className={styles.inner}>
        <Input
          register={register}
          errors={errors}
          name='address'
          label='Address'
          id='profile-address'
          type='text'
        />
        <Input
          register={register}
          errors={errors}
          name='guests'
          label='Maximum number of guests'
          id='profile-guests'
          type='text'
        />
        <TextArea
          register={register}
          errors={errors}
          name='bio'
          label='Bio'
          id='profile-bio'
        />
      </div>
    </div>
  )
}

export default Info