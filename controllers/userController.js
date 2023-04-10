const { User, Thought } = require("../models");
const { populate } = require("../models/thought");

module.exports = {
    async getUser(req, res) {
      try {
        const user = await User.find();
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

 async getSingleUser(req, res) {
    try{
     const userId = await User.findById(req.params.userId)
    .populate('thoughts')
    .populate('friends')
    res.json(userId);
} catch (err) {
  res.status(500).json(err);
    }
    },
    async createUser(req, res) {
        try {
          const user = await user.create(req.body);
          res.json(course);
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
    },
    async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            res.status(404).json({ message: 'No User with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
    },
        async deleteUser(req, res) {
            try {
              const user = await User.findOneAndDelete({ _id: req.params.userId });
        
              if (!user) {
                res.status(404).json({ message: 'No User with that ID' });
              }
        
              await thought.deleteMany({ _id: { $in: course.students } });
              res.json({ message: 'Course and students deleted!' });
            } catch (err) {
              res.status(500).json(err);
            }
}
};
