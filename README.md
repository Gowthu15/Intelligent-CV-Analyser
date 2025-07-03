## 🛠 Local Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. **Backend Setup (FastAPI)**

```bash
python -m venv env
env\Scripts\activate  # on Windows
# or: source env/bin/activate  # on Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 3. **Frontend Setup (Vite + React + Tailwind)**

```bash
cd candidate-readiness-dashboard
npm install
npm run dev
```