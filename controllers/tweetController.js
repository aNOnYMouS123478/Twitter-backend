const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const tweet = new Tweet({ userId: req.user.id, text });
    await tweet.save();
    res.status(201).json({ message: 'Tweet posted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTimeline = async (req, res) => {
  try {
    const tweets = await Tweet.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
