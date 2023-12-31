import { FC, useEffect, useRef } from 'react'
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
import { CreateEventNewFormProps } from '@/types/eventsTypes'
import styles from '@/components/CreateEvent/CreateEvent.module.scss'

const CreateEventNewForm: FC<CreateEventNewFormProps> = ({ isEditable }) => {
  const prevEventsState = useRef<boolean | null>(null)
  
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

  useEffect(() => {
    if (prevEventsState.current !== isEditable) {
      clearErrors()
      reset()
    }

    prevEventsState.current = isEditable
  }, [isEditable])
  
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
      <div className={styles.createNewBtns}>
        <Button
          text='Confirm'
          colored
          size={ButtonSizes.LG}
          type={ButtonTypes.Submit}
        />
        { isEditable && (
          <Button
            text='Delete'
            error
            size={ButtonSizes.LG}
            type={ButtonTypes.Button}
          />
        ) }
      </div>
    </Form>
  )
}

export default CreateEventNewForm