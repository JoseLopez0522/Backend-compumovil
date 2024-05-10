import { Router } from 'express';
const stripe = require('stripe')('sk_test_51PEN7rGSroiVvTtuVr8Mt3MIaRwTjw9g6sFiFNoOlAvdLhSMBAQnBEYyeZWSIfIpCHjjGz1RUR6xakflO9WPFViP00njmb34Fo');


const router = Router();


router.post('/', async (req, res) => {
    try {
    const {cantidad} = req.body
    console.log(cantidad);
    
      
    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2024-04-10'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(cantidad)*100,
      currency: 'mxn',
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter
      // is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: 'pk_test_51PEN7rGSroiVvTtuUY1aLdrx1vhK6vz77NJcXzCygX9HWXAMsPpzCyPj5kG4S9R4X97CAx9O1xjwKZgexMukppSr00u05qMNZ4'
  
  
    });
  } catch (error) {
      console.log(error);
      
  }
  });

export default router;
