// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const StatsSchema = new Schema({
//   loginCount: {
//     type: Number,
//     default: 0,
//   },
//   articleViews: [
//     {
//       articleId: String,
//       title: String,
//       count: { type: Number, default: 0 },
//     }
//   ],
//   categoryViews: [
//     {
//       category: String,
//       count: { type: Number, default: 0 },
//     }
//   ],
// });

// const Stats = mongoose.model("Stats", StatsSchema);
// module.exports = Stats;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatsSchema = new Schema({
  loginCount: { type: Number, default: 0 },

  // Track daily login counts (date -> count)
  dailyLoginCount: { type: Map, of: Number, default: {} },

  // Track user registrations
  userJoinsByDay: { type: Map, of: Number, default: {} }, // YYYY-MM-DD -> count
  userJoinsByMonth: { type: Map, of: Number, default: {} }, // YYYY-MM -> count
  userJoinsByYear: { type: Map, of: Number, default: {} }, // YYYY -> count

  // Track article views
  articleViews: [
    {
      articleId: String,
      title: String,
      count: { type: Number, default: 0 },
    },
  ],

  // Track category views
  categoryViews: [
    {
      category: String,
      count: { type: Number, default: 0 },
    },
  ],
});

const Stats = mongoose.model("Stats", StatsSchema);
module.exports = Stats;
