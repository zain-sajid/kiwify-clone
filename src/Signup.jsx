export default function Login() {
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
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              entrar na sua conta existente
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-4" action="#" method="POST">
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
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    type="repeat-email"
                    autoComplete="repeat-email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label class="relative flex items-start mt-2">
                  <div class="flex items-center h-5">
                    <input
                      type="checkbox"
                      class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                    />
                  </div>
                  <div class="ml-2 text-sm leading-5">
                    <span class="font-medium text-gray-700">
                      Eu li e aceito os
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        class="underline"
                      >
                        {' '}
                        termos de uso
                      </a>
                      ,{' '}
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        class="underline"
                      >
                        termos de licença de uso de software
                      </a>
                      ,{' '}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        class="underline"
                      >
                        política de conteúdo
                      </a>{' '}
                      da Kiwify
                    </span>
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
