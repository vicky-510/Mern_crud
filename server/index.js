import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const port = process.env.PORT || 3030;
const app = express();
app.use(express.json());
app.use(cors());

// Use the student routes
app.use('/', studentRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
