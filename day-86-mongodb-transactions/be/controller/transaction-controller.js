const User = require("../models/user");
const Shippingaddress = require("../models/shippingAddress");
const Product = require("../models/Product");
exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const product = await Product.updateOne(
      {
        _id: "64224e21b2fc81762f3d0e84",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );
    console.log("product", product);
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await Shippingaddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.createTransactionWithoutSession = async (req, res) => {
  try {
    const product = await Product.updateOne(
      {
        _id: "64224e21b2fc81762f3d0e84",
      },
      {
        $inc: { quantity: +2 },
      }
    );

    console.log("product", product);
    const user = await User.create(req.body.user);
    console.log("user Created");
    const shippingAddress = await Shippingaddress.create({
      address: req.body.shippingAddress,
      user_id: user._id,
    });
    console.log("address created");
    res.json({
      status: true,
      user,
      shippingAddress,
      product,
    });
  } catch (error) {
    res.json({ status: false, error });
  }
};
