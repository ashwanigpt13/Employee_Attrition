# Employee Attrition Predictor

Employee Attrition Predictor is a full-stack machine learning application that predicts whether an employee is likely to leave a company based on key HR and work-related features. The project combines a FastAPI backend, a Next.js frontend, and a trained scikit-learn model to provide a simple and interactive attrition-risk experience.

## Overview

This project was built to demonstrate how machine learning can be used in human resource analytics. It takes inputs such as employee satisfaction, evaluation score, project count, monthly hours, tenure, work accidents, promotion history, department, and salary level, then returns a prediction with:

- a binary attrition prediction
- employee status (likely to stay or high risk of leaving)
- confidence score
- stay and leave probabilities
- a short explanation message

## Project Goals

- Predict employee attrition risk using a trained model
- Provide a simple web interface for HR or management teams
- Show how a machine learning model can be exposed through a REST API
- Demonstrate a complete frontend-backend workflow using modern Python and JavaScript frameworks

## Features

- Interactive employee input form
- Real-time prediction from a trained model
- Backend API built with FastAPI
- Modern UI built with Next.js and Tailwind CSS
- Clear prediction results with probability percentages
- Easy local setup for development and testing

## Tech Stack

### Backend
- Python
- FastAPI
- Pydantic
- scikit-learn
- pandas
- numpy
- joblib
- Uvicorn

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```text
Employee_Attrition/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── schemas.py
│   ├── services.py
│   └── employee_attrition_model.pkl
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── package.json
│   └── next.config.js
├── Employee_attrition.ipynb
├── Employee_HR.csv
└── README.md
```

## How It Works

1. The frontend collects employee information from the user.
2. The form submits the data to the backend prediction endpoint.
3. The backend converts the request into a pandas DataFrame.
4. The trained model predicts whether the employee is likely to stay or leave.
5. The API returns probabilities and a human-readable result.
6. The frontend displays the prediction in a dashboard-style UI.

## Backend API

The backend exposes a FastAPI service with the following endpoint:

### GET /
Returns a simple health/status message.

### POST /predict
Accepts employee data and returns a prediction result.

#### Request body

```json
{
  "Satisfaction": 0.72,
  "Evaluation": 0.55,
  "number_of_projects": 3,
  "average_montly_hours": 150,
  "time_spent_company": 3,
  "work_accident": 0,
  "Promotion": 0,
  "Department": "Sales",
  "Salary_INR": 80000
}
```

#### Response example

```json
{
  "success": true,
  "data": {
    "prediction": 1,
    "employee_status": "High Risk of Leaving",
    "confidence": 84.32,
    "risk": "High",
    "stay_probability": 15.68,
    "leave_probability": 84.32,
    "message": "Employee has a high probability of leaving. Consider reviewing workload, satisfaction, and career growth opportunities."
  }
}
```

## Installation

### Prerequisites

Make sure you have the following installed:

- Python 3.9+
- Node.js 18+
- npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd Employee_Attrition
```

### 2. Set up the backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

On Windows PowerShell:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

## Running the Application

### Start the backend

```bash
cd backend
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

### Start the frontend

```bash
cd frontend
npm run dev
```

Then open:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Model Details

The model used in this project is stored in the backend as a serialized joblib file:

- backend/employee_attrition_model.pkl

The model is loaded at startup by the backend service and used to generate predictions from incoming user input.

## Data Used

The project includes a dataset file:

- Employee_HR.csv

This dataset contains employee-related features used for training and testing the attrition prediction model. The notebook file:

- Employee_attrition.ipynb

can be used to explore the training process and model development workflow.

## Notes

- The frontend expects the backend to be available at http://localhost:8000.
- The prediction form uses the field names defined in the backend schema.
- The model output is a simple example of how attrition prediction can be integrated into an HR decision support tool.

## Future Improvements

Possible enhancements for the project include:

- Adding authentication for admin or HR users
- Saving prediction history for each user
- Adding charts and analytics for employee risk trends
- Improving the model with better feature engineering and tuning
- Deploying the application to a cloud platform

## License

This project is for educational and demonstration purposes.
