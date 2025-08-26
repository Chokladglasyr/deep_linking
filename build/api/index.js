"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../database/db"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userController_1 = require("../controllers/userController");
const path_1 = __importDefault(require("path"));
const tracking_1 = require("../controllers/tracking");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    // const clientIp = req.ip || req.socket.remoteAddress;
    // console.log("Visitor IP:", clientIp);
    console.log("hej");
    console.log(req);
    (0, tracking_1.trackUser)(req);
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.post("/signup", userController_1.createUser);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    console.log(`Server is running at http://localhost:${port}`);
}));
app.post("/signup", userController_1.createUser);
