import { useRouteError } from 'react-router-dom';
import logoREMCO from '../navbar/assets/img/remco_logo.png';

export default function Error() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center px-4 text-center">
      <img
        src={logoREMCO}
        alt="REMCO"
        className="h-[50vh] w-auto max-w-full object-contain mb-8 opacity-80"
      />
      <h1 className="font-display text-8xl font-bold text-primary dark:text-white mb-4">
        404
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg mb-2">
        Página no encontrada
      </p>
      {error && (
        <p className="text-neutral-400 dark:text-neutral-500 text-sm mb-8">
          {error.statusText || error.message}
        </p>
      )}
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      >
        Regresar al inicio
      </a>
    </div>
  );
}
