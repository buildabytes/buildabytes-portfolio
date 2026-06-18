import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1280px] flex-col justify-center px-[5vw] py-[70px]">
      <p className="mb-6 font-mono text-[0.82rem] uppercase tracking-[0.07em] text-acid">
        404 — Not Found
      </p>
      <h1 className="text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.92] tracking-[-0.035em] text-ink">
        Page missing
        <span
          className="ml-[0.12em] inline-block size-[0.18em] bg-acid align-baseline"
          aria-hidden="true"
        />
      </h1>
      <p className="mt-6 max-w-[40ch] border-t border-line pt-5 text-[1.1rem] text-grey">
        That page doesn&rsquo;t exist. The home page might be what you were looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-acid px-5 py-3 text-[0.85rem] font-medium text-paper no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(190,242,100,0.55)]"
      >
        Back to home
      </Link>
    </main>
  );
}
