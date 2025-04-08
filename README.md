
# 💡 Idea API — RESTful Backend with Hono + Cloudflare Workers

A simple REST API built using the [Hono](https://hono.dev) framework and deployed on Cloudflare Workers. This API allows users to submit and view ideas for an offline event. Data is stored **in-memory** for the duration of the server’s runtime.

---

## API:  https://codefirsttest.aroy262692.workers.dev/ideas

## 📌 API Endpoints

### ➕ POST `/ideas`
Create a new idea.

#### ✅ Request Body (JSON)
```json
{
  "title": "Workshop on Creativity",
  "description": "A deep dive into design thinking."
}
```

#### 🟢 Success Response
- **Status Code:** `201 Created`
- **Response:**
```json
{
  "id": 1,
  "title": "Workshop on Creativity",
  "description": "A deep dive into design thinking."
}
```

#### 🔴 Error Response (Invalid Input)
- **Status Code:** `400 Bad Request`
- **Response:**
```json
{
  "error": "Title and description are required and must be non-empty strings."
}
```

---

### 📥 GET `/ideas`
Retrieve all submitted ideas.

#### 🟢 Success Response
```json
[
  {
    "id": 1,
    "title": "Workshop on Creativity",
    "description": "A deep dive into design thinking."
  },
  ...
]
```

---

## ❓ Conceptual Questions

### 1. What are the main HTTP methods used in REST APIs, and what is the typical purpose of each?

- **GET**: Retrieves data from the server.
- **POST**: Creates a new resource on the server.
- **PUT**: Updates an existing resource entirely.
- **PATCH**: Partially updates a resource.
- **DELETE**: Removes a resource from the server.

These methods correspond to CRUD (Create, Read, Update, Delete) operations:
- **Create**: POST
- **Read**: GET
- **Update**: PUT/PATCH
- **Delete**: DELETE

---

### 2. Why is input validation important for a backend API?

Input validation is crucial because it:
- Prevents **bad or malformed data** from entering your system.
- Protects against **security threats** like injection attacks.
- Ensures **data consistency**.
- Helps return **meaningful error messages** to clients.
- Prevents server crashes due to unexpected input types or structures.

Without validation, the server could process incorrect data or become vulnerable to malicious attacks.

---

## 🚀 How to Run the Server Locally

### 🧰 Prerequisites
- Node.js
- `npm`
- `wrangler` (Cloudflare's developer CLI)

Install Wrangler globally:
```bash
npm install -g wrangler
```

### ⚙️ Setup

1. Clone the repo:
```bash
git clone https://github.com/pshycodr/code-first-test.git
cd idea-api-hono
```

2. Install dependencies:
```bash
npm install
```

3. Start development server locally:
```bash
npm run dev
```

4. Deploy to Cloudflare Workers:
```bash
npm run deploy
```
> [!IMPORTANT]
> Make sure to set up your Cloudflare account and configure `wrangler.toml` with your account details.

---

## 📁 Project Structure

```
idea-api-hono/
│
├── src/
│   └── index.ts         # API logic (Hono app)
├── wrangler.toml        # Cloudflare config
├── tsconfig.json        # TypeScript config
├── package.json         # Dependencies & scripts
└── README.md            # This file
```
