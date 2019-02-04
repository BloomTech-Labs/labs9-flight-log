# Billing

## Stripe

This Billing page was created with [Stripe](https://www.stripe.com), specifically using [Stripe Elements](https://www.stripe.com/docs/recipes/elements-react), a pre-built UI component for React applications. 

To get the Billing page functional on your local computer, you will need to install the dependency by:<br>
  `yarn add react-stripe-elements` - for yarn <br>
  `npm i react-stripe-elements` for npm

#
Stripe works by handling customer sensitive data, converting it into tokens that are sent to your server. This process requires using a `publishable key` and `secret key` that are obtained from Stripe. 

## To obtain your Stripe API Keys
Create a Stripe account and navigate to the [Stripe dashboard](https://dashboard.stripe.com/test/dashboard).

Observe the very top lefthand corner, click the dropdown arrow and select `New account`. Name it and click `Create account` when finished.

In the left-hand navigation pane, select `Developers`, then `API keys`. <br>
<br>
  The `publishable key` will be used in the `react-frontend/src/components/pages/Billing.js`, replacing the current key visible in `<StripeProvider>` on line 29. This is public and that is okay!<br>
  <br>
  The `secret key` will be used in the server. It should not be published! You should create a `.env` file to store this key safely. Then place the `.env` variable on line 7 in the backend `server.js`. <br>
#

## Testing Stripe
You cannot use real credit card information when in Stripe test mode. Instead:<br>
  1. For card number enter: `4242 4242 4242 4242`<br>
  2. For expiration date enter a `month/year` combo that has not passed<br>
  3. For CVC: `any 3 digit number`<br>
  4. For ZIP code: `Any 5 digit number`<br>

Select purchase amount.

Submit card and after `Purchase Complete` confirmation, visit your Stripe Dashboard. The payment date and time should be seen on the `Home` page chart, or visit `Payments` for an itemized list. 
