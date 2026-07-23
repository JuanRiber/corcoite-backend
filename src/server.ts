import express from 'express';
import CustomerRouter from './routes/customer.route.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);

app.listen(3000);
