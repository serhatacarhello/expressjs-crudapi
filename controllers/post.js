const PostSchema = require("../models/post.js");

const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(200).json({
      newPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.find();
    res.status(200).json({
      getPosts,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const detailPost = await PostSchema.findById(id);

    res.status(200).json({
      detailPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedPost);
  } catch (error) {}
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: "Silme işlemi tamamlandı!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create query functions
const searchPost = async (req, res) => {
  // get parameter from req data
  const { search, tag } = req.query;
  try {
    // RegExp takes two parameter
    const title = new RegExp(search, "i");

    const posts = await PostSchema.find({
      $or: [{ title }],
      tag: { $in: tag.split(",") },
    });

    res.status(200).json({
      posts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getDetail,
  getUpdate,
  deletePost,
  searchPost,
};
