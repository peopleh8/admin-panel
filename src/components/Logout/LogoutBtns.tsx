import { FC } from 'react'
import Button from '@/components/UI/Button/Button'
import { ButtonSizes, ButtonTypes } from '@/types/commonTypes'
import styles from '@/components/Logout/Logout.module.scss'

interface LogoutGeneralProps {
  positiveHandle: () => void
  negativeHandle: () => void
}

const LogoutBtns: FC<LogoutGeneralProps> = ({ positiveHandle, negativeHandle }) => {
  return (
    <div className={styles.btns}>
      <Button
        text='Yes'
        size={ButtonSizes.LG}
        colored
        type={ButtonTypes.Button}
        id='logout-positive'
        onClick={positiveHandle}
      />
      <Button
        text='No'
        size={ButtonSizes.LG}
        type={ButtonTypes.Button}
        id='logout-negative'
        onClick={negativeHandle}
      />
    </div>
  )
}

export default LogoutBtns