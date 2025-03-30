# Scanify - Track Your Spending Effortlessly

Scanify is a web application designed to simplify personal expense tracking. Upload receipts or spending screenshots, and our AI-powered system extracts order details, categorizes expenses, and integrates them into your Notion dashboard.

---

## ✨ Features

### Frontend (React + TailwindCSS)

- **Landing Page**: Showcases the product workflow ("Snap → Categorize → Track")
- **Upload Page**:
  - Upload image files (JPG/PNG) of receipts
  - Optional fields for custom spending notes and date overrides
  - Displays categorized expense data after processing

### Backend & Core Functionality

- **Image Processing**: Extracts text using OCR (Tesseract.js)
- **AI Categorization**: OpenAI GPT-4o structures itemized spending data and assigns categories (e.g., Food, Groceries, Entertainment)
- **User Authentication**: Supabase Auth for secure logins
- **Database Storage**: Supabase DB to store user-specific data and Notion integration credentials
- **Notion Integration**: Logs extracted spending data into a Notion database

---

## 🛠 Tech Stack

| Task                   | Tool                           |
| ---------------------- | ------------------------------ |
| **Frontend UI**        | React, TypeScript, TailwindCSS |
| **Auth**               | Supabase Auth                  |
| **Backend**            | Node.js/Next.js API routes     |
| **OCR**                | Tesseract.js                   |
| **AI Extraction**      | OpenAI GPT-4o                  |
| **Database**           | Supabase DB                    |
| **Notion Integration** | Notion SDK                     |

---

## 🏆 Achievements

**2nd Place - Best UI/UX** at the **TACS Build4Good Hackathon**

---

## 🔍 How It Works

1. Upload a receipt or spending screenshot
2. AI extracts and categorizes expenses
3. Data is saved to Notion for easy tracking
