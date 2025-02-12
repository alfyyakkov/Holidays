# Holidays API

## 📌 Overview
The **Holidays API** is a Django REST Framework (DRF) based backend application that provides holiday data based on country and year. It fetches holiday details and allows optional searching by holiday name.

## 🚀 Setup Instructions

### **1️⃣ Install Python 3.11**
Ensure you have **Python 3.11** installed. You can verify it using:
```bash
python --version
```
If not installed, download it from [Python Official Website](https://www.python.org/downloads/).

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/alfyyakkov/Holidays.git
cd backend
```

### **3️⃣ Create a Virtual Environment (Recommended)**
```bash
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate    # For Windows
```

### **4️⃣ Install Dependencies**
Run the following command to install all required packages:
```bash
pip install -r requirements.txt
```

### **5️⃣ Run Migrations**
```bash
python manage.py migrate
```

### **6️⃣ Start the Server**
```bash
python manage.py runserver
```
The API will be accessible at:
```
http://127.0.0.1:8000/
```

---
## 🌍 API Endpoints

### **1️⃣ Get Available Countries**
- **Endpoint:** `/api/countries/`
- **Method:** `GET`
- **Response Example:**
```json
{
    "meta": {
        "code": 200
    },
    "response": {
        "url": "https://calendarific.com/supported-countries",
        "countries": [
            {
                "country_name": "Afghanistan",
                "iso-3166": "AF",
                "total_holidays": 24,
                "supported_languages": 2,
                "uuid": "f0357a3f154bc2ffe2bff55055457068",
                "flag_unicode": "🇦🇫"
            }
        ]
  }
}
```

### **2️⃣ Get Holidays**
- **Endpoint:** `/api/holidays/`
- **Method:** `GET`
- **Accepted Parameters:**
  - `year` (int, **required**) → Year for which holidays are needed.
  - `country` (ISO code, **required**) → Country code (e.g., US, IN, FR).
  - `search` (string, optional) → Search holidays by name.

#### **Example Request:**
```bash
GET /api/holidays/?year=2024&country=US
```

#### **Example Response:**
```json
{
    "meta": {
        "code": 200
    },
    "response": {
        "holidays": [
            {
                "name": "Epiphany",
                "description": "Epiphany is a Christian holiday celebrated globally on January 6 each year. It commemorates two events recorded in the Bible: the three wise men’s visit to baby Jesus; and Jesus’ baptism.",
                "country": {
                    "id": "ee",
                    "name": "Estonia"
                },
                "date": {
                    "iso": "2025-01-06",
                    "datetime": {
                        "year": 2025,
                        "month": 1,
                        "day": 6
                    }
                },
                "type": [
                    "Observance"
                ],
                "primary_type": "Observance",
                "canonical_url": "https://calendarific.com/holiday/estonia/epiphany",
                "urlid": "estonia/epiphany",
                "locations": "All",
                "states": "All"
            }
        ]
    }
}
```

#### **Example Request with Search Parameter:**
```bash
GET /api/holidays/?year=2024&country=US&search=Christmas
```

---
## ⚙️ Environment Variables (.env)
Create a `.env` file in the project root to store sensitive credentials. Example:
```
CALENDARIFIC_API_KEY="your-api-key"
```

---
## 🛠️ Technologies Used
- **Python 3.11**
- **Django**
- **Django REST Framework (DRF)**
- **SQLite (Database)**
- ****

---
## ✨ Contributors
- **Alfy KY**


