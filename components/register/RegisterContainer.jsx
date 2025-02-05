'use client'
import { Button } from '../ui/button'
import { InputField } from './InputField'

const RegisterContainer = ({
    isLogin,
    handleIsLogin,
    handleSubmit,
handleChange,
name,
email,
password,
}) => {

    

  return (
      <div className='p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 w-full max-w-[500px]'>
          <div className='mb-3 lg:mb-5'>
            <h1 className='text-primary text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide'>
                {isLogin ? 'Login' : 'Register'}
              </h1>
          </div>
          <form className='grid gap-y-3' >
              {!isLogin && (
              <InputField
                    type='text'
                    name='name'
                      label='name'
                      value={name}
                      onChange={handleChange}
                />
              )}
              {/* email */}
              <InputField
                  type='email'
                  name='email'
                  label='email'
                  value={email}
                  onChange={handleChange}
              />
              {/* password */}
              <InputField
                  type='password'
                  name='password'
                  label='password'
                  value={password}
                  onChange={handleChange}
              />
              <Button className='text-lg lg:text-xl capitalize text-white mt-2 lg:mt-3' type='submit' onClick={handleSubmit}>
                  submit
              </Button>
          </form>
          <div className='mt-2 lg:mt-3 grid place-items-center'>
              {isLogin ? (
                  <p className='lg:text-lg'>
                      create a new account! <button type="button"  className='text-primary' onClick={handleIsLogin}>register</button>
              </p>
              ): (
                  <p className='lg:text-lg'>
                  you already have an account? <button type="button"  className='text-primary' onClick={handleIsLogin}>login</button>
              </p>
              )}
          </div>
    </div>
  )
}

export default RegisterContainer