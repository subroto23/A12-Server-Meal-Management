const { payment_secret } = require("../../Secret");

const stripe = require("stripe")(payment_secret);
const PaymentPostController = async (req, res, next) => {
  try {
    const { price } = req.body;
    const amount = parseInt(Number(price) * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
  }
};
module.exports = PaymentPostController;
