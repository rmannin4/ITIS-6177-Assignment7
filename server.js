const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const prices = {
    food: [
        { id: 1, name: 'apple', price: 1 },
        { id: 2, name: 'orange', price: 2 },
        { id: 3, name: 'banana', price: 3 },
    ],
    drinks: [
        { id: 1, name: 'water', price: 1 },
        { id: 2, name: 'juice', price: 3 }
    ]
};

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Food & Drink Prices API",
            version: "1.0.0",
            description: "A simple API to manage food and drink prices",
        },
        servers: [{ url: `http://157.245.221.245:${port}` }],
    },
    apis: ["./server.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /prices/food:
 *   get:
 *     summary: Get all food prices
 *     responses:
 *       200:
 *         description: List of food items with prices
 */
app.get('/prices/food', (req, res) => {
    res.json(prices.food);
});

/**
 * @swagger
 * /prices/drinks:
 *   get:
 *     summary: Get all drink prices
 *     responses:
 *       200:
 *         description: List of drink items with prices
 */
app.get('/prices/drinks', (req, res) => {
    res.json(prices.drinks);
});

/**
 * @swagger
 * /prices/food:
 *   post:
 *     summary: Add a new food item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Food item added
 */
app.post('/prices/food', (req, res) => {
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: "Invalid input" });
    }
    const newItem = { id: prices.food.length + 1, name, price };
    prices.food.push(newItem);
    res.status(201).json(newItem);
});

/**
 * @swagger
 * /prices/drinks:
 *   post:
 *     summary: Add a new drink item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Drink item added
 */
app.post('/prices/drinks', (req, res) => {
    const { name, price } = req.body;
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: "Invalid input" });
    }
    const newItem = { id: prices.drinks.length + 1, name, price };
    prices.drinks.push(newItem);
    res.status(201).json(newItem);
});

/**
 * @swagger
 * /prices/food/{id}:
 *   patch:
 *     summary: Update food price
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated food price
 */
app.patch('/prices/food/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;
    const item = prices.food.find(p => p.id === id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    if (typeof price !== 'number') return res.status(400).json({ error: "Invalid price" });

    item.price = price;
    res.json(item);
});

/**
 * @swagger
 * /prices/drinks/{id}:
 *   patch:
 *     summary: Update drink price
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Updated drink price
 */
app.patch('/prices/drinks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { price } = req.body;
    const item = prices.drinks.find(p => p.id === id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    if (typeof price !== 'number') return res.status(400).json({ error: "Invalid price" });

    item.price = price;
    res.json(item);
});

/**
 * @swagger
 * /prices/food/{id}:
 *   delete:
 *     summary: Delete a food item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted food item
 */
app.delete('/prices/food/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = prices.food.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: "Item not found" });

    prices.food.splice(index, 1);
    res.json({ message: "Item deleted" });
});

/**
 * @swagger
 * /prices/drinks/{id}:
 *   delete:
 *     summary: Delete a drink item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted drink item
 */
app.delete('/prices/drinks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = prices.drinks.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: "Item not found" });

    prices.drinks.splice(index, 1);
    res.json({ message: "Item deleted" });
});

app.listen(port, () => {
    console.log(`API running at http://157.245.221.245:${port}`);
});
