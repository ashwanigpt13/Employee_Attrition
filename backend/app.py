from fastapi import FastAPI

from schemas import EmployeeRequest, PredictionResponse
from services import predict_employee

app = FastAPI(
    title="Employee Attrition Predictor API",
    version="1.0.0",
    description="Predict whether an employee is likely to leave the company."
)


@app.get("/")
def home():
    return {
        "message": "Employee Attrition Predictor API is running."
    }


@app.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(employee: EmployeeRequest):

    return predict_employee(employee)