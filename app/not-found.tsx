import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-primary-600 mb-4 text-6xl font-bold text-black  dark:text-white">
        404
      </h1>
      <p className="mb-8 text-lg text-gray-600 text-center  dark:text-white">
        No se encontró la página que estabas buscando.
      </p>
      <Link href="/">
        <button className="  dark:text-white rounded px-6 py-3 font-bold transition duration-300 ease-in-out transform hover:scale-105">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
