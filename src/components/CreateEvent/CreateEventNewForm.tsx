import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Form from '@/components/UI/Form/Form'
import Input from '@/components/UI/Field/Input'
import TextArea from '@/components/UI/Field/TextArea'
import Checkbox from '@/components/UI/Checkbox/Checkbox'
import Date from '@/components/CreateEvent/CreateEventNewDate'
import Time from '@/components/CreateEvent/CreateEventNewTime'
import Images from '@/components/CreateEvent/CreateEventNewImages'
import Button from '../UI/Button/Button'
import { ButtonSizes, ButtonTypes, FormValues } from '@/types/commonTypes'
import styles from '@/components/CreateEvent/CreateEvent.module.scss'

const CreateEventNewForm: FC = () => {
  const { 
    register, 
    handleSubmit,
    reset, 
    control,
    clearErrors,
    setValue,
    formState: { errors } 
  } = useForm<FormValues>()

  const submitHandler: SubmitHandler<FormValues> = data => {
    // dispatch(addNewScheduleAsync(data))
    // reset()

    console.log(data)
  }
  
  return (
    <Form 
      className={styles.createNewForm}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className={styles.createNewInner}>
        <div className={styles.createNewSide}>
          <Input
            register={register}
            errors={errors}
            name='name'
            label='Name'
            id='create-new-name'
            type='text'
          />
          <Date
            register={register}
            errors={errors}
            setValue={setValue}
          />
          <Time
            register={register}
            errors={errors}
            control={control}
          />
          <Input
            register={register}
            errors={errors}
            name='age'
            label='Age limit'
            id='create-new-age'
            type='text'
          />
          <Input
            register={register}
            errors={errors}
            name='link'
            label='Ticket Link'
            id='create-new-link'
            type='text'
          />
          <Checkbox 
            label='Save this template for later'
          />
        </div>
        <div className={styles.createNewSide}>
          <Images />
          <TextArea
            label='Info about event'
            id='info'
          />
        </div>
      </div>
      <Button
        text='Confirm'
        colored
        size={ButtonSizes.LG}
        type={ButtonTypes.Submit}
        id='upload-submit'
      />
    </Form>
  )
}

export default CreateEventNewForm