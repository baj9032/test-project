module.exports = {
  index: function(req, res) {
    res.status(200).json({ message: 'index' });
  },
  index1: function(req, res) {
    res.status(200).json({ message: 'index1' });
  },
  index2: function(req, res) {
    res.status(200).json({ message: 'index2' });
  },
  index3: function(req, res) {
    res.status(200).json({ message: 'index3' });
  },
  index4: function (req, res) {
    res.status(200).json({ message: 'index4' });
  }
};
