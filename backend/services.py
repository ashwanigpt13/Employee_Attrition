import joblib
import pandas as pd

MODEL_PATH = "employee_attrition_model.pkl"

model = joblib.load(MODEL_PATH)


def predict_employee(employee):

    # Convert request to DataFrame
    data = pd.DataFrame([employee.model_dump()])

    # Prediction
    prediction = int(model.predict(data)[0])

    # Probabilities
    probabilities = model.predict_proba(data)[0]

    stay_probability = round(probabilities[0] * 100, 2)
    leave_probability = round(probabilities[1] * 100, 2)

    confidence = max(stay_probability, leave_probability)

    if prediction == 0:
        employee_status = "Likely to Stay"
        risk = "Low"
        message = (
            "Employee is unlikely to leave based on the provided information."
        )
    else:
        employee_status = "High Risk of Leaving"
        risk = "High"
        message = (
            "Employee has a high probability of leaving. "
            "Consider reviewing workload, satisfaction, and career growth opportunities."
        )

    return {
        "success": True,
        "data": {
            "prediction": prediction,
            "employee_status": employee_status,
            "confidence": confidence,
            "risk": risk,
            "stay_probability": stay_probability,
            "leave_probability": leave_probability,
            "message": message
        }
    }