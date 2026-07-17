import express from 'express';
import promotionRouter from './modules/promotion/routes/promotion.route';

const app = express();
app.use(express.json());


app.use('/api/v1/promotions', promotionRouter);

app.listen(3002, () => console.log('Order-Promotion Service running on port 3002'));