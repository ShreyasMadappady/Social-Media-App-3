import Post from "../models/Post.js";

export const post = async (req, res) => {
  console.log(req.body);
  console.log("Hello");
  try {
    const {userId, firstName, lastName, location, description, occupation } = req.body;
    const postData = new Post({
      userId,
      firstName,
      lastName,
      location,
      description,
      picturePath: req.file.filename,
      occupation,
    });
    const data = await postData.save();
    
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
