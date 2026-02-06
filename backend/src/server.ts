import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/leadRoutes';
import propertyRoutes from './routes/propertyRoutes';
import documentRoutes from './routes/documentRoutes';
import inquiryRoutes from './routes/inquiryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Routes versioned
app.use('/api/v1/leads', leadRoutes);
app.use('/api/v1/properties', propertyRoutes);
app.use('/api/v1/documents', documentRoutes);
app.use('/api/v1/inquiries', inquiryRoutes);

// Standard error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
      timestamp: new Date().toISOString()
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
