"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const initDatabase_1 = __importDefault(require("./services/initDatabase"));
(0, initDatabase_1.default)()
    .then(async () => {
    const server = await (0, server_1.build)();
    server.listen(4000, '0.0.0.0', () => {
        const address = server.server.address();
        const ip = address.address;
        console.log(`Server is running on port ${ip}:4000`);
    });
})
    .catch((error) => {
    console.error('Error initializing database:', error);
    process.exit(1);
});
