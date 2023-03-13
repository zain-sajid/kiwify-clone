import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const [error, setError] = useState(null);

  function validateEmail() {
    //  check if email is empty
    if (!email) {
      setError({
        field: 'email',
        message: 'Esse campo é obrigatório',
      });

      return;
    }
    // validate email using regex
    const re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      setError({
        field: 'email',
        message: 'O e-mail deve ser válido',
      });

      return;
    }
  }

  function validateRepeatEmail() {
    //  check if email is empty
    if (!repeatEmail) {
      setError({
        field: 'repeatEmail',
        message: 'Esse campo é obrigatório',
      });
      return;
    }

    // check if email is the same
    if (email !== repeatEmail) {
      setError({
        field: 'repeatEmail',
        message: 'O e-mail deve ser igual ao anterior',
      });
      return;
    }
  }

  function validatePassword() {
    //  check if email is empty
    if (!password) {
      setError({
        field: 'password',
        message: 'Esse campo é obrigatório',
      });

      return;
    }

    // validate password
    if (password.length < 6) {
      setError({
        field: 'password',
        message: 'A senha deve ter no mínimo 6 caracteres',
      });

      return;
    }
  }

  function validateCheckbox() {
    //  check if email is empty
    if (!checkbox) {
      setError({
        field: 'checkbox',
        message: 'Esse campo é obrigatório',
      });
      return;
    }
  }

  function handleSubmission(e) {
    e.preventDefault();

    validatePassword();
    validateRepeatEmail();
    validateEmail();
    validateCheckbox();
  }

  return (
    <>
      <div className="flex min-h-screen bg-gray-50 flex-col justify-center items-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/kiwify-logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>
          <p className="mt-2 text-center">
            Ou{' '}
            <Link to="/login">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                entrar na sua conta existente
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-4" onSubmit={handleSubmission}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                      error?.field === 'email'
                        ? 'ring-red-500'
                        : 'ring-gray-300'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6`}
                  />
                  {error?.field === 'email' && (
                    <div className="text-red-500 text-xs mt-1">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="repeat-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repetir e-mail
                </label>
                <div className="mt-1">
                  <input
                    id="repeat-email"
                    name="repeat-email"
                    type="email"
                    autoComplete="repeat-email"
                    value={repeatEmail}
                    onChange={(e) => setRepeatEmail(e.target.value)}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                      error?.field === 'repeatEmail'
                        ? 'ring-red-500'
                        : 'ring-gray-300'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6`}
                  />
                  {error?.field === 'repeatEmail' && (
                    <div className="text-red-500 text-xs mt-1">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                      error?.field === 'password'
                        ? 'ring-red-500'
                        : 'ring-gray-300'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6`}
                  />
                  {error?.field === 'password' && (
                    <div className="text-red-500 text-xs mt-1">
                      {error.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value={checkbox}
                      onChange={(e) => {
                        setCheckbox((prev) => !prev);
                      }}
                      className={`form-checkbox h-4 w-4 text-indigo-600 border ${
                        error?.field === 'checkbox' ? 'border-red-500' : ''
                      } transition duration-150 ease-in-out cursor-pointer`}
                    />
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        className="underline"
                      >
                        {' '}
                        termos de uso
                      </a>
                      ,{' '}
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        className="underline"
                      >
                        termos de licença de uso de software
                      </a>
                      ,{' '}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        className="underline"
                      >
                        política de conteúdo
                      </a>{' '}
                      da Kiwify
                    </span>
                    {error?.field === 'checkbox' && (
                      <div className="text-red-500 text-xs mt-1">
                        {error.message}
                      </div>
                    )}
                  </div>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Criar conta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
