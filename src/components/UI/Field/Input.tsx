import { FC } from 'react'
import { Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { FieldProps } from '@/types/commonTypes'
import styles from '@/components/UI/Field/Field.module.scss'

const Input: FC<FieldProps> = ({ label, mask, name, register, errors, control, ...props }) => {
  return (
    <div className={styles.fieldWrapper}>
      { label && <label className={styles.label} htmlFor={props.id}>{label}</label> }
      <div className={styles.fieldInner}>
        { mask && !register && (
          <InputMask
            className={styles.field}
            mask={mask} 
            maskChar={null}
            autoComplete='off'
            name={name}
            {...props}
          />
        ) }
        { mask && register && (
          <Controller
            control={control}
            name={name}
            defaultValue=''
            render={() => (
              <InputMask
                mask={mask}
                maskChar={null}
                className={`${styles.field} ${errors[name] ? styles.error : ''}`}
                autoComplete="off"
                {...register(name, {
                  required: true,
                })}
                {...props}
              />
            )}
          />
        ) }
        { !mask && !register && (
          <input 
            className={styles.field}
            autoComplete='off'
            name={name}
            {...props}
          />
        ) }
        { !mask && register && (
          <input
            className={`${styles.field} ${errors[name] ? styles.error : ''}`}
            autoComplete='off'
            {...register(name, {
              required: true,
            })}
            {...props}
          />
        ) }
      </div>
    </div>
  )
}

export default Input