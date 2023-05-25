import { useRouter } from "next/router";

export function Button({ onClick, url, extraStyle }) {
  const router = useRouter();

  return (
    <div
      onClick={url ? () => router.push("/") : onClick}
      className={`absolute px-5 max-w-7xl mx-auto w-full left-1/2 -translate-x-1/2 top-[3rem] md:top-20 ${extraStyle} `}
    >
      <button className="flex gap-1 text-white hover:text-blue-500">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Back
      </button>
    </div>
  );
}

export function Button2({ onClick, url }) {
  const router = useRouter();

  return (
    <div
      onClick={url ? () => router.push("/") : onClick}
      className="max-w-max md:hidden block w-full absolute"
    >
      <button className="flex gap-1  md:p-0 p-1 md:bg-transparent bg-white rounded-full md:rounded-none text-zinc-800 md:text-white hover:text-blue-500">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="md:block hidden">Back</span>
      </button>
    </div>
  );
}

export function Button3({ onClick, url }) {
  return (
    <div
      onClick={url ? () => router.push(url) : onClick}
      className="max-w-4xl mx-auto px-5 md:mt-10 mt-5 w-full"
    >
      <button className="flex border pr-5 pl-3 border-current py-1 rounded gap-1 hover:text-white text-zinc-400">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Back
      </button>
    </div>
  );
}
