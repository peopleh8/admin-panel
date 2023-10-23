import { FC } from 'react'
import Image from 'next/image'
import { ButtonProps, ButtonSizes } from '@/types/commonTypes'
import styles from '@/components/UI/Button/Button.module.scss'

const Button: FC<ButtonProps> = ({ icon, text, size, colored, ...props }) => {
  return (
    <button 
      className={
        `${styles.btn} ${size === ButtonSizes.LG ? styles.btnLg : size === ButtonSizes.MD ? styles.btnMd : styles.btnSm} ${colored ? styles.btnColored : styles.btnUncolored}`
      }
      {...props}
    >
      { icon && (
        <Image
          className={styles.icon}
          src={icon}
          width={14}
          height={14}
          alt='Icon'
        />
      ) }
      <span className={styles.text}>{text}</span>
    </button>
  )
}

export default Button