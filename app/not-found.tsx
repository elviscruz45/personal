import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-primary-600 mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-lg text-gray-600">
        No se encontro la pagina que estabas buscando.
      </p>
      <Link href="/">
        <button className="bg-primary-600 hover:bg-primary-700 rounded px-4 py-2 font-bold ">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
