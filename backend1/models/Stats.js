const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatsSchema = new Schema({
  loginCount: {
    type: Number,
    default: 0,
  },
  articleViews: [
    {
      articleId: String,  
      title: String,      
      count: { type: Number, default: 0 },
    }
  ],
  categoryViews: [
    {
      category: String,  
      count: { type: Number, default: 0 },
    }
  ],
});

const Stats = mongoose.model("Stats", StatsSchema);
module.exports = Stats;
