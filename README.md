# 🧾 Dynamic 365 License Activation Form

A clean, professional **License Activation Form** built using **React** and **Fluent UI**. This form allows users to register license details, CRM information, and notification preferences for Dynamic 365 environments. It's fully responsive, styled for usability, and validates key fields before submission.

---

## 🚀 Features

- ✅ Responsive layout with Fluent UI + Fluent UI Components
- ✅ Dynamic form validation with visual error indicators
- ✅ CRM and licensing sections with prefilled fields
- ✅ Notification interval selection using styled radio buttons
- ✅ Custom styling integrated with Fluent UI themes
- ✅ Modern, maintainable React code with hooks and modular logic

---

## 📸 Screenshots

<img width="1912" height="944" alt="image" src="https://github.com/user-attachments/assets/88a7b86e-a554-4771-a730-0d906ab20737" />


---

## 📦 Prerequisites

Before running or forking this project, ensure you have the following installed:

- **Node.js** `v18+` → [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** → [Download Git](https://git-scm.com/downloads)

---

## 🛠️ Tech Stack

| Tech                        | Purpose                            |
|-----------------------------|------------------------------------|
| React                       | Frontend UI logic                  |
| Fluent UI                   | Component styling and controls     |
| Fluent UI React Components  | Extended component styling         |
| Vite (recommended for builds) | Fast development build system    |

---

## 📥 Installation
## 🧰 Getting Started (After Forking)

Follow these steps after forking the repository to set up and run the project locally.

---

### 1. 🍴 Fork the Repository

Go to the [GitHub repo](https://github.com/<original-owner>/dynamic-365-license-form) and click on the **Fork** button (top right corner). This will create a copy of the repository under your GitHub account.

---

### 2. ⬇️ Clone the Forked Repository

Open your terminal and run:

```bash
git clone https://github.com/<your-username>/dynamic-365-license-form.git
cd dynamic-365-license-form
```

Replace `<your-username>` with your GitHub username.

---

## 📦 Install Required Packages

This project uses:

- **React**
- **Vite** (for fast development builds)
- **Tailwind CSS**
- **Fluent UI (@fluentui/react)** and **@fluentui/react-components**

Run the following to install everything:

```bash
npm install
```

---

## 🏗️ Manual Setup (If You're Starting From Scratch)

If you're starting a new project instead of using the fork, here’s how to set everything up:

---

### ✅ Step 1: Create a Vite + React Project

```bash
npm create vite@latest my-app --template react
cd my-app
```

---

### ✅ Step 2: Install Tailwind CSS

Follow the official Tailwind setup:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Update `tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**Add Tailwind to `index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### ✅ Step 3: Install Fluent UI

```bash
npm install @fluentui/react @fluentui/react-components
```

---

### ✅ Step 4: Run Your App

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🧪 Verify Setup

Ensure:

- Tailwind classes like `bg-blue-500` are working.
- Fluent UI components like `<TextField />` render correctly.
- No build errors in the terminal.

---

## 📄 Summary of All Key Installs

```bash
# Core
npm install

# OR manual setup:
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install @fluentui/react @fluentui/react-components
```

---

## 👏 You’re ready to build!

Start editing `App.jsx` and make it your own!


----

## 📁 Project Structure

```
src/
├── assets/
│   └── Dynamic_Logo.png
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧪 Validation Rules

| Field           | Validation             |
|----------------|------------------------|
| First Name     | Required               |
| Last Name      | Required               |
| Company Name   | Required               |
| Email          | Required + valid format|
| Website        | Required               |
| Main Phone     | Required               |
| CRM URL        | Required               |
| Organization   | Required               |
| From / To      | Required               |
| Interval       | Must be selected       |

---

## ✅ License Activation Flow

1. User fills the form and selects notification interval.
2. On clicking **ACTIVATE**, all fields are validated.
3. If valid, data (with timestamp) is logged via `onSubmitSuccess` callback.
4. Form resets for a new entry.

---

## 📤 Output Format (on success)

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Contoso",
  "email": "john@contoso.com",
  "website": "https://contoso.com",
  "mainPhone": "123-456-7890",
  "crmUrl": "https://crm.contoso.com",
  "organization": "SalesTeam",
  "from": "admin@contoso.com",
  "to": "support@contoso.com",
  "interval": "week",
  "checkbox": true,
  "submittedAt": "2025-07-20T12:34:56.789Z"
}
```

---

## 📌 Customization

- 🔧 Update static values like CRM version and license count in the form.
- 🎨 Change colors by modifying Fluent UI theme or inline styles.
- 📨 Hook up `onSubmitSuccess` with your API or local storage.

---

## 🧑‍💻 Author

**👤 Abdul Rahman**

- GitHub: [@ABDUL-RAHMAN-9](https://github.com/ABDUL-RAHMAN-9)

---

## 📄 License

This project is open-source and free to use under the **MIT License**.
