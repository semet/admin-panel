import { Button, RevealPassword } from '@/components/base'
import { CheckBox, Input } from '@/components/form'
import { loginRequest } from '@/features/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { schema } from './schema'
import { TLoginRequest } from './type'

export const LoginForm = () => {
  const { push } = useRouter()
  const [inputType, setInputType] = useState<'text' | 'password'>('password')
  const formMethods = useForm<TLoginRequest>({
    resolver: zodResolver(schema),
    defaultValues: {
      remember: true
    }
  })
  const { handleSubmit } = formMethods

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TLoginRequest) => loginRequest(data),
    onSuccess: async (data) => {
      await data.user
        .getIdTokenResult()
        .then(({ token, expirationTime }) => {
          setCookie('token', token, {
            expires: new Date(expirationTime),
            path: '/',
            sameSite: 'strict'
          })
        })
        .then(() => {
          push('/')
        })
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = handleSubmit((data) => {
    mutate(data)
  })

  const revealPassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }
  return (
    <Fragment>
      <FormProvider {...formMethods}>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 "
        >
          <Input
            name="email"
            label="Email"
            placeholder="Email Address"
            required
          />
          <Input
            type={inputType}
            name="password"
            label="Password"
            placeholder="Password"
            required
            rightNode={
              <RevealPassword
                onClick={revealPassword}
                inputType={inputType}
              />
            }
          />
          <div className="flex justify-between">
            <CheckBox
              name="remember"
              label="Remember me"
            />
            <Link
              href="#"
              className="text-xs text-primary-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            variant="primary"
            title="Login"
            disabled={isPending}
          />
        </form>
      </FormProvider>
    </Fragment>
  )
}
