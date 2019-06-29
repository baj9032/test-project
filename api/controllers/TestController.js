module.exports = {
  index: function(req, res) {
    res.status(200).json({ message: 'index' });
  },
  index1: function (req, res) {
    res.status(200).json({ message: 'index1' });
  }
};
