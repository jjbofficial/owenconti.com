import Button from '@/components/Button';
import Checkbox from '@/components/form/Checkbox';
import Guest from '@/layouts/Guest';
import Input from '@/components/form/Input';
import Label from '@/components/form/Label';
import React, { useEffect } from 'react';
import ValidationErrors from '@/components/form/ValidationErrors';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: ''
  });

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox' ? event.target.checked : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <Guest>
      {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div>
          <Label forInput="email" value="Email" />

          <Input
            type="text"
            name="email"
            value={data.email}
            className="block w-full mt-1"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="block w-full mt-1"
            autoComplete="current-password"
            handleChange={onHandleChange}
          />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <InertiaLink
              href={route('password.request')}
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Forgot your password?
            </InertiaLink>
          )}

          <Button className="ml-4" processing={processing}>
            Log in
          </Button>
        </div>
      </form>
    </Guest>
  );
}
