import { FC, MouseEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Gallery from '@/components/Profile/Gallery/Gallery'
import Info from '@/components/Profile/Info/Info'
import Schedule from '@/components/Profile/Schedule/Schedule'
import Buttons from '@/components/Profile/Buttons/Buttons'
import Form from '@/components/UI/Form/Form'
import { FormValues } from '@/types/commonTypes'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import MetaData from '@/layout/Metadata'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { setEditable } from '@/store/reducers/profileReducer'
import styles from '@/styles/Profile.module.scss'

const Profile: FC = () => {
  const dispatch = useTypedDispatch()
  const isEditable = useTypedSelector(state => state.profile.isEditable)

  const { 
    register, 
    handleSubmit,
    reset, 
    control,
    clearErrors,
    formState: { errors } 
  } = useForm<FormValues>()

  const editHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setEditable(true))
  }

  const cancelHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setEditable(false))
  }

  const submitHandler: SubmitHandler<FormValues> = data => {
    // dispatch(addNewScheduleAsync(data))
    // reset()

    console.log(data)
  }
  
  return (
    <Form 
      className={styles.profile}
      onSubmit={handleSubmit(submitHandler)}
    >
      <MetaData title='Profile' />
      <SectionTitle leavel={1}>Edit Profile</SectionTitle>
      <Gallery />
      <Info
        register={register}
        errors={errors}
      />
      <Schedule
        register={register}
        errors={errors}
        control={control}
      />
      <Buttons 
        isEditable={isEditable} 
        editHandler={editHandler} 
        cancelHandler={cancelHandler}
      />
    </Form>
  )
}

export default Profile