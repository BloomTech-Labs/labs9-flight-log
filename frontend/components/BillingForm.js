
const BillingForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSumbit}>
        //cc number 16
        <input
          name="ccard"
          placeholder="CC#"
          onChange={props.changeHandler}
        />

        //exp date 4
        <input
          name="expdate"
          placeholder="EXP"
          onChange={props.changeHandler}
        />

        //cvv num 3
        <input
          name="cvv"
          placeholder="CVV"
          onChange={props.changeHandler}
        />

        //TODO checkbox 1 yr sub or 1 month sub

        //buy now button
        <button onClick={props.handleSumbit}>Buy Now</button>

      </form>
    </div>
  );
};

export default BillingForm;