import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { useRouter } from 'next/router'
import { ButtonSizes, ButtonTypes, FormValues } from '@/types/commonTypes'
import Form from '@/components/UI/Form/Form'
import Input from '@/components/UI/Field/Input'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import Button from '@/components/UI/Button/Button'
import { setAuth, setOpenGreet } from '@/store/reducers/profileReducer'
import styles from '@/styles/Login.module.scss'
import { PAGE_ROUTES } from '@/constants/pageRoutes'

const Login: FC = () => {
  const dispatch = useTypedDispatch()
  const router = useRouter()

  const { 
    register, 
    handleSubmit,
    control,
    formState: { errors } 
  } = useForm<FormValues>()

  const submitHandler: SubmitHandler<FormValues> = data => {
    router.push(PAGE_ROUTES.dashboard.route).then(() => {
      dispatch(setAuth(true))
      dispatch(setOpenGreet(true))
    })
  }
  
  return (
    <div className={styles.login}>
      <div className={styles.inner}>
        <SectionTitle leavel={1}>
          Welcome <br /> To <br />
          <span>Wiggle</span>
        </SectionTitle>
        <Form
          className={styles.form}
          onSubmit={handleSubmit(submitHandler)}
        >
          <Input
            label='Email'
            register={register}
            errors={errors}
            control={control}
            id='login-email'
            type='text' 
            name='email'
            placeholder='Email'
          />
          <Input
            label='Password'
            register={register}
            errors={errors}
            control={control}
            id='login-password'
            type='password' 
            name='password'
            placeholder='Password'
          />
          <Button
            text='Log in'
            size={ButtonSizes.LG}
            colored
            type={ButtonTypes.Submit}
            id='login'
          />
        </Form>
      </div>
    </div>
  )
}

export default Login