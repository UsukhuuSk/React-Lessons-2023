const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const app = express();
const PORT = 8080;
const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Day-80 FileUpload Multer</h1>");
});

app.get("/files", async (request, response) => {
  const folder = "./uploads/";
  const imgs = [];

  fs.readdirSync(folder).forEach((file) => {
    console.log(file);
    const imgUrl = `http://localhost:8080/uploads/${file}`;
    imgs.push(imgUrl);
  });
  response.status(200).json({
    data: imgs,
  });
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);
  const imgs = [];
  fs.readdirSync("/uploads").forEach((file) => {
    console.log(file);
    const imgUrl = `http://localhost:8080/uploads/${file}`;
    imgs.push(fileUrl);
  });
  response.json({
    data: imgs,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
