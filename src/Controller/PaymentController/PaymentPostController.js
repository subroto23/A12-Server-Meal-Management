const { payment_secret } = require("../../Secret");
const stripe = require("stripe")(`${payment_secret}`);

const PaymentPostController = async (req, res, next) => {
  try {
    const { PriceValue, subscriberValue } = req.body;
    const amount = parseInt(
      Number(PriceValue.price) * 100 || Number(subscriberValue.price) * 100
    );
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: payment.client_secret });
  } catch (error) {
    // console.log(error);
  }
};
module.exports = PaymentPostController;
