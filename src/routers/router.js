const express = require('express');
const { 
    createTransaction, 
    getTransactions, 
    getTransactionById, 
    updateTransaction, 
    deleteTransaction, 
    getSummary 
} = require('./transactions');

const {createCategory} = require("./category")

const router = express.Router();

router.post('/category',createCategory)
router.post('/transactions', createTransaction);
router.get('/transactions', getTransactions);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction);
router.get('/summary', getSummary);

module.exports = router;
