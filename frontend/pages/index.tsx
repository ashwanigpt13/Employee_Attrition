import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Employee Attrition Predictor
        </p>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Predict the risk of employees leaving your company.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Use the model-backed dashboard to evaluate attrition risk, predict outcomes, and review the confidence of each result.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            View Dashboard
          </Link>
          <a
            href="https://github.com/"
            className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
          >
            Backend Repo
          </a>
        </div>
      </div>
    </main>
  );
}
