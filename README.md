# floww.ai 
# Nxtwave 


Here’s a guide for  Personal Expense Tracker project:

Personal Expense Tracker API
This project is a RESTful API built using Node.js, Express.js, and MongoDB to manage personal financial records. Users can record their income and expenses, retrieve transactions, and get a summary of their financial status.


Features:
1.CRUD operations for transactions
2.Categories for income and expenses
3.Summary reports of total income, expenses, and balance

Setup and Run Instructions
Prerequisites:
Node.js installed on your machine
MongoDB installed locally or a MongoDB cloud database (MongoDB Atlas)

Install dependencies:
npm install

Run the server: To start the server in development mode:
npm run dev

API Documentation:

base url : https://floww-ai-1.onrender.com
Endpoints:
1. Add a Transaction
URL: /transactions
Method: POST
Request Body (JSON):

{
    "type": "expense",
    "category": "Food",
    "amount": 50,
    "date": "2024-10-21T14:34:12.000Z", // if not given deafult date is taken
    "description": "Lunch at restaurant"
}

response :
{
    "_id": "603c9e9a7b1b3e003ab46c6c",
    "type": "expense",
    "category": "Food",
    "amount": 50,
    "date": "2024-10-21T14:34:12.000Z",
    "description": "Lunch at restaurant"
}

2.Get All Transactions 
URL: /transactions
Method: GET
Response:
        {
               "_id": "603c9e9a7b1b3e003ab46c6c",
              "type": "expense",
               "category": "Food",
              "amount": 50,
              "date": "2024-10-21T14:34:12.000Z",
              "description": "Lunch at restaurant"
          },
          {
              "_id": "603c9e9a7b1b3e003ab46c6d",
              "type": "income",
              "category": "Salary",
              "amount": 5000,
              "date": "2024-10-21T14:34:12.000Z",
              "description": "October salary"
        }

Get a Transaction by ID
URL: /transactions/:id
Method: GET
Response:
{
    "_id": "603c9e9a7b1b3e003ab46c6c",
    "type": "expense",
    "category": "Food",
    "amount": 50,
    "date": "2024-10-21T14:34:12.000Z",
    "description": "Lunch at restaurant"
}
Update a Transaction by ID
URL: /transactions/:id
Method: PUT
Request Body (JSON)
{
    "type": "expense",
    "category": "Travel",
    "amount": 100
}
response:
{
    "_id": "603c9e9a7b1b3e003ab46c6c",
    "type": "expense",
    "category": "Travel",
    "amount": 100,
    "date": "2024-10-21T14:34:12.000Z",
    "description": "Lunch at restaurant"
}
Delete a Transaction by ID
URL: /transactions/:id
Method: DELETE
Response:
{ "message": "Transaction deleted" }

Get a Summary of Transactions
URL: /summary
Method: GET
Response:
{
    "totalIncome": 5000,
    "totalExpense": 150,
    "balance": 4850
}

overall api's:
Adding a transaction POST: https://floww-ai-1.onrender.com /transactions
Retrieving all transactions with pagination GET https://floww-ai-1.onrender.com/transactions
Retrieving a transaction by ID GET https://floww-ai-1.onrender.com/transactions/:id
Updating a transaction PUT https://floww-ai-1.onrender.com/transactions/:id
Deleting a transaction DELETE https://floww-ai-1.onrender.com/transactions/:id
Getting a summary of transactions GET https://floww-ai-1.onrender.com/summary

<img width="652" alt="Screenshot summary" src="https://github.com/user-attachments/assets/e980ae1d-55b5-43c8-b745-385eefcec92e">
<img width="647" alt="Screenshot get-transactions" src="https://github.com/user-attachments/assets/c470d3a3-5f73-4a65-98f5-4aef02ba3fe5">
<img width="640" alt="Screenshot get-transaction-byId" src="https://github.com/user-attachments/assets/5bd0524d-557f-4534-80e5-706060e1ccc5">
<img width="629" alt="Screenshot edit-transaction" src="https://github.com/user-attachments/assets/54feff8f-f9de-448c-95da-a28ee6e344f4">
<img width="624" alt="Screenshot deletet" src="https://github.com/user-attachments/assets/f2900f1a-8e64-4589-a7f3-8d5bcb27f3a9">
![post-transactions](https://github.com/user-attachments/assets/0388cfd8-68f3-42ad-a42f-8946ee90d748)
![Screenshot post-transactions](https://github.com/user-attachments/assets/b6454936-08f1-4f27-9c03-d7c75642fd75)








