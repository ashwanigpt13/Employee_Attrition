from pydantic import BaseModel


class EmployeeRequest(BaseModel):
    Satisfaction: float
    Evaluation: float
    number_of_projects: int
    average_montly_hours: int
    time_spent_company: int
    work_accident: int
    Promotion: int
    Department: str
    Salary_INR: int


class PredictionData(BaseModel):
    prediction: int
    employee_status: str
    confidence: float
    risk: str
    stay_probability: float
    leave_probability: float
    message: str


class PredictionResponse(BaseModel):
    success: bool
    data: PredictionData