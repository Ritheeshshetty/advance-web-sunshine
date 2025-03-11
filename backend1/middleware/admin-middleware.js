// const adminMiddleware = async(req,res,next) =>{
//     try {
//         // console.log(req.user);
//         res.status(200).json({msg:req.user});
//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = adminMiddleware;

const adminMiddleware = async (req, res, next) => {
  try {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
