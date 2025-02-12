# **Holidays API Project**

This project provides a **Django REST API** for fetching holiday data and a **React frontend** for searching and displaying holidays.

## **Project Structure**  
```
/Holidays
│── /backend   # Django Backend
│── /frontend  # React Frontend
```

---

## **Backend Setup (Django API)**

### **Prerequisites**
- Python 3.11+
- SQLite

### **Installation Steps**

1. **Clone the repository**  
   ```bash
   git clone https://github.com/alfyyakkov/Holidays.git
   cd Holidays/backend
   ```

2. **Create and activate a virtual environment**  
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Mac/Linux
   venv\Scripts\activate  # For Windows
   ```

3. **Install dependencies**  
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**  
   ```bash
   python manage.py migrate
   ```

5. **Start the Django server**  
   ```bash
   python manage.py runserver
   ```

### **API Endpoints**  
- **`/api/countries`** - Get a list of supported countries.  
- **`/api/holidays`** - Fetch holidays based on parameters.  

**Accepted Parameters:**  
| Parameter  | Type  | Required | Description |
|------------|------|----------|-------------|
| `year`     | int  | ✅ Yes | Year for holiday lookup |
| `country`  | str  | ✅ Yes | ISO country code (e.g., US, IN) |
| `search`   | str  | ❌ No  | Search holidays by name |

---

## **Frontend Setup (React + Tailwind CSS)**

### **Prerequisites**
- Node.js (16+)
- npm or yarn

### **Frontend Requirements**
- React 18+
- Tailwind CSS
- Axios for API requests
- React Router for navigation

### **Installation Steps**

1. **Navigate to the frontend directory**  
   ```bash
   cd ../frontend/holidays-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the frontend app**  
   ```bash
   npm start
   ```

### **Features**  
✔ **Home Page:** Search form with country and year fields  
✔ **Holiday List Page:** Displays holiday results based on search  

---

## **Connecting Frontend & Backend**  

- The frontend fetches data using `axios` from the Django backend.  
- Update `api.js` in React with the correct backend URL:  
  ```javascript
  export const API_BASE_URL = "http://127.0.0.1:8000/api";
  ```

---

## **Project Status**  

- ✅ **Backend Completed (Django API)**  
- 🚧 **Frontend In Progress (React & Tailwind CSS)**  

I am currently learning React and Tailwind CSS, so development is ongoing.  

---

### **Contributions & Feedback**  
If you have any feedback or suggestions, feel free to reach out.  

---

### **License**  
This project is open-source and available under the [MIT License](LICENSE).

