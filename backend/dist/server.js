"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const leadRoutes_1 = __importDefault(require("./routes/leadRoutes"));
const propertyRoutes_1 = __importDefault(require("./routes/propertyRoutes"));
const documentRoutes_1 = __importDefault(require("./routes/documentRoutes"));
const inquiryRoutes_1 = __importDefault(require("./routes/inquiryRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Routes versioned
app.use('/api/v1/leads', leadRoutes_1.default);
app.use('/api/v1/properties', propertyRoutes_1.default);
app.use('/api/v1/documents', documentRoutes_1.default);
app.use('/api/v1/inquiries', inquiryRoutes_1.default);
// Standard error handling
app.use((err, req, res, next) => {
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
exports.default = app;
