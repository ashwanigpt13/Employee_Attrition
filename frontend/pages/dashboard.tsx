import PredictionForm from "../components/PredictionForm";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8 rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-10 text-white shadow-xl shadow-slate-300/10 sm:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
            Employee Attrition Dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Predict who may leave and review attrition risk.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            Use the form below to submit employee features and view model predictions with confidence scores and risk guidance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
              <p className="mt-3 text-slate-600">
                This interface sends employee attributes to the backend prediction API and displays the returned status, probability, and recommended actions.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-900">1</span>
                  Provide employee details and submit the form.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-900">2</span>
                  The model returns a prediction with stay and leave probabilities.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-900">3</span>
                  Use the result to prioritize employee retention and plan follow-up.
                </li>
              </ul>
            </section>

            <PredictionForm />
          </div>

          <aside className="space-y-6">
            <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Model Inputs</h2>
              <p className="mt-3 text-slate-600">
                The predictor expects satisfaction, evaluation, project count, monthly hours, company tenure, accident history, promotion status, department, and salary level.
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Backend Endpoint</h2>
              <p className="mt-3 text-slate-600">
                The frontend posts to <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">/api/predict</code>, which rewrites to the backend on local development.
              </p>
              <p className="mt-4 text-sm text-slate-700">
                Make sure the backend server is running at <span className="font-semibold">http://localhost:8000</span>.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
