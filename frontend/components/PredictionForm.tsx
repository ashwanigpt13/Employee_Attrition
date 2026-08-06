import { FormEvent, useState } from "react";

const departments = [
  "Sales",
  "Technical",
  "Support",
  "IT",
  "Product",
  "Marketing",
  "RandD",
  "Accounting",
  "HR",
  "Management"
];

const salaryLevels = [
  { label: "Low", value: 1 },
  { label: "Medium", value: 2 },
  { label: "High", value: 3 }
];

const initialState = {
  Satisfaction: 0.72,
  Evaluation: 0.55,
  number_of_projects: 3,
  average_montly_hours: 150,
  time_spent_company: 3,
  work_accident: 0,
  Promotion: 0,
  Department: "Sales",
  Salary_INR: 2
};

type FormState = typeof initialState;

interface PredictionResult {
  prediction: number;
  employee_status: string;
  confidence: number;
  risk: string;
  stay_probability: number;
  leave_probability: number;
  message: string;
}

export default function PredictionForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Prediction request failed.");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error("Prediction failed.");
      }

      setResult(data.data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900">Predict Employee Attrition</h2>
      <p className="mt-2 text-sm text-slate-600">
        Enter employee details to see whether the model predicts they are likely to leave.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Satisfaction
            <input
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={formState.Satisfaction}
              onChange={(event) => updateField("Satisfaction", parseFloat(event.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Evaluation
            <input
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={formState.Evaluation}
              onChange={(event) => updateField("Evaluation", parseFloat(event.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Projects
            <input
              type="number"
              min="1"
              max="10"
              value={formState.number_of_projects}
              onChange={(event) => updateField("number_of_projects", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Monthly Hours
            <input
              type="number"
              min="80"
              max="320"
              value={formState.average_montly_hours}
              onChange={(event) => updateField("average_montly_hours", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Years at Company
            <input
              type="number"
              min="0"
              max="20"
              value={formState.time_spent_company}
              onChange={(event) => updateField("time_spent_company", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Department
            <select
              value={formState.Department}
              onChange={(event) => updateField("Department", event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Salary Level
            <select
              value={formState.Salary_INR}
              onChange={(event) => updateField("Salary_INR", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              {salaryLevels.map((salary) => (
                <option key={salary.value} value={salary.value}>
                  {salary.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Work Accident
            <select
              value={formState.work_accident}
              onChange={(event) => updateField("work_accident", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Promotion in Last 5 Years
            <select
              value={formState.Promotion}
              onChange={(event) => updateField("Promotion", parseInt(event.target.value, 10))}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Predicting…" : "Run Prediction"}
          </button>
        </div>
      </form>

      {error ? (
        <div className="mt-6 rounded-2xl bg-rose-50 px-4 py-4 text-sm text-rose-700">
          <strong>Error:</strong> {error}
        </div>
      ) : null}

      {result ? (
        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Prediction</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{result.employee_status}</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
              Confidence: <span className="font-semibold">{result.confidence}%</span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Stay probability</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{result.stay_probability}%</p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-sm text-slate-500">Leave probability</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{result.leave_probability}%</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-700">{result.message}</p>
        </div>
      ) : null}
    </section>
  );
}
