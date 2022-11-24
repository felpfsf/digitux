import { ButtonForm } from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FormEvent, useRef } from 'react'

export const Form = () => {
  const swal = withReactContent(Swal)

  const formRef = useRef<HTMLFormElement>(null)

  const cleanInputs = () => {
    formRef?.current?.reset()
  }

  const swalert = () => {
    swal.fire({
      title: <p>Thank&apos;s for your message</p>,
      titleText: 'test',
      text: 'We will be in touch with you soon',
      icon: 'success',
      iconColor: 'green'
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    swalert()
    cleanInputs()
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='w-full flex flex-col'>
      <Input
        type='text'
        label={'Your Name'}
        name={'name'}
        placeholder={'Your Name'}
        required={true}
      />
      <Input
        type='email'
        label={'Your Email'}
        name={'email'}
        placeholder={'Your Email'}
        required={true}
      />
      <Input
        type='phone'
        label={'Your Phone Number'}
        name={'phone'}
        placeholder={'Your Phone Number'}
        required={false}
      />
      <Textarea
        label={'Message:'}
        name={'message'}
        placeholder={'What do you want to talk about?'}
        required={true}
      />
      <ButtonForm buttonText={'Send the Message'} />
    </form>
  )
}
