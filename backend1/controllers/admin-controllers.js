// const User = require("../models/User")
// const getAllUsers = async(req,res) =>{
//     try {
//         const users = await User.find({},{password:0});
//         console.log(users);
//         if(!users || users.length ===0){
//             return res.status(404).json({message:"No Users Found!"});
//         }
//         return res.status(200).json(users);
//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = {getAllUsers};



// *************************** BEFORE ADDING STATS ***********************//
// const User = require("../models/User");

// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.find({}, { password: 0 }); 
//         if (!users || users.length === 0) {
//             return res.status(404).json({ message: "No Users Found!" });
//         }
//         return res.status(200).json(users);
//     } catch (error) {
//         next(error); 
//     }
// };

// module.exports = { getAllUsers };


// *************************** AFTER ADDING STATS ***********************//
const User = require("../models/User");
const Stats = require("../models/Stats");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }); 
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found!" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error); 
    }
};

// ✅ Fetch stats for admin dashboard
const getStats = async (req, res, next) => {
    try {
        let stats = await Stats.findOne({});
        if (!stats) {
            
            stats = new Stats({});
            await stats.save();
        }

        res.status(200).json({
            loginCount: stats.loginCount,
            articleViews: stats.articleViews,
            categoryViews: stats.categoryViews,
        });
    } catch (error) {
        console.error("Error fetching stats:", error);
        next(error);
    }
};

module.exports = { getAllUsers, getStats };
