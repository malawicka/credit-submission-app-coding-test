
# 📌 Credit Submission App (Prototype)

A simple web-based prototype application for managing credit submissions,  Built with HTML, Tailwind CSS, and vanilla JavaScript using localStorage for data persistence. built as part of a coding test for PT Capella Multidana.

---

## 🚀 Overview

This application is designed to help internal teams manage customer credit submissions more efficiently. It allows users to:

* Add new credit applications
* View a list of submissions
* Approve or reject applications
* View detailed submission information

---

## 🛠️ Technologies Used

* HTML5
* Tailwind CSS (via CDN)
* JavaScript (Vanilla JS)
* LocalStorage (for data persistence)

---

## ✨ Features

### 1. Credit Submission Form

Users can input:

* Full Name
* Submission Type (Motor / Mobil / Multiguna)
* Loan Amount
* Tenor (months)
* Monthly Income
* Notes

---

### 2. Validation Rules

The system enforces the following business rules:

* ❌ Income < Rp 1,000,000 → Application rejected
* ❌ Loan amount > Rp 200,000,000 → Not allowed
* ❌ Tenor > 24 months → Not allowed
* ❌ Maximum 3 submissions per user

---

### 3. Submission Table

Displays:

* Name
* Type
* Loan Amount
* Tenor
* Monthly Installment
* Submission Date
* Status (Pending / Approved / Rejected)

---

### 4. Actions

Each submission includes:

* ✅ Approve button
* ❌ Reject button
* 🔍 Detail button

---

### 5. Status Indicator

* 🟢 Approved → Green text
* 🔴 Rejected → Red text
* ⚫ Pending → Black text

---

### 6. Modal Confirmation

* Used for approve/reject confirmation
* Replaces default alert for better UI/UX

---

### 7. Data Persistence

* Uses browser `localStorage`
* Data remains after page reload

---

## ▶️ How to Run

1. Download or clone the project
2. Make sure both files exist:

   * `index.html`
   * `script.js`
3. Open `index.html` in your browser

---

## 🧹 Reset Data (Optional)

To clear stored data, open browser console (F12) and run:

```javascript
localStorage.removeItem("pengajuan");
```

---

## 📁 Project Structure

```
project-folder/
│
├── index.html   # UI structure
└── script.js    # Application logic
```



## 🎯 Notes

This application is designed as an internal tool prototype to support the credit submission process within the company.

The system focuses on:
- Implementing business rules and validation logic
- Providing a simple and user-friendly interface
- Simulating data storage using browser localStorage

This prototype demonstrates how the system would function before being integrated with a backend service or database in a production environment.

---

## 👨‍💻 Author

Developed by [Malawika]

---

## ✅ Status

✔ Completed
✔ Functional
✔ Ready for evaluation

---
Sreenshoot
<img width="1365" height="712" alt="image" src="https://github.com/user-attachments/assets/d6225bd9-1b5f-490a-b00c-c063415b7505" />
<img width="1365" height="707" alt="image" src="https://github.com/user-attachments/assets/7bbb8e71-b13b-4641-b3a0-660881e0e8bd" />
<img width="1365" height="715" alt="image" src="https://github.com/user-attachments/assets/10988a1d-8f29-46cc-8637-7875dacb425b" />
<img width="1358" height="713" alt="image" src="https://github.com/user-attachments/assets/02ed2fde-4a6f-449e-a47b-00207c97ea58" />
<img width="1365" height="713" alt="image" src="https://github.com/user-attachments/assets/94023d70-4f3b-4a37-b893-aceb6fdd12c3" />
<img width="1365" height="719" alt="image" src="https://github.com/user-attachments/assets/96b608dc-af39-41a5-86ec-df5e468e111e" />
<img width="1365" height="723" alt="image" src="https://github.com/user-attachments/assets/7ded87db-b331-4057-8b15-b7d2fd5ccfde" />







