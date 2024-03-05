import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import multer from "multer";
import { post } from "../controllers/post.js";

// FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/userId/posts", verifyToken, getUserPosts);

//UPDATE
router.patch("/:Id/like", verifyToken, likePost);

//POST
router.post("/post", upload.single("picturePath"), post);

export default router;
