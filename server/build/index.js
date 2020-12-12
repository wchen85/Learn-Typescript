"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log('Listening on port 3000 xxx');
});
// app.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//       <h1>
//       Hi there
//       </h1>
//     </div>
//   `);
// });
// app.listen(3000, () => {
//   console.log('Listening on port 3000 xxx');
// });
