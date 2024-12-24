const express = require('express');
const cors = require('cors');

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static('static'));

/** 
<http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>
**/

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseInt(req.query.quantity);
  const profit = (marketPrice - boughtAt) * quantity;
  res.send(`${profit}`);
});

/**
 * <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>
 */

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const totalReturn = stock1 + stock2 + stock3 + stock4;
  res.send(`${totalReturn}`);
});

/**
 * <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>
 *
 */

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);
  const returnPercentage = (returns / boughtAt) * 100;
  res.send(`${returnPercentage}`);
});

/**
 * <http://localhost:3000/total-return-percentage?stock1=10&stock2=20& stock3=20&stock4=40>
 *
 */
app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(`${totalReturnPercentage}`);
});

/**
 * <http://localhost:3000/status?returnPercentage=90>
 */
app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  const status = returnPercentage > 0 ? 'Profit' : 'Loss';
  res.send(`${status}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Stock portfolio analysis API!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
