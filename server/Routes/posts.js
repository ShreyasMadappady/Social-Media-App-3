import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { getUserFriends } from "../controllers/users";

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/userId/posts", verifyToken, getUserPosts);

//UPDATE
router.patch("/:Id/like", verifyToken, likePost);