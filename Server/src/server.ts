import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const frontendUrl = process.env.FRONTEND_URL?.replace(/\/+$/, "");
if (!frontendUrl) {
  throw new Error("A variável FRONTEND_URL deve ser configurada.");
}

const app = express();
app.use(cors({ origin: frontendUrl, methods: ["POST"], allowedHeaders: ["Content-Type"], maxAge: 600 }));
app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Muitas mensagens enviadas. Tente novamente em alguns minutos." },
});

app.use("/contact", contactLimiter, contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
