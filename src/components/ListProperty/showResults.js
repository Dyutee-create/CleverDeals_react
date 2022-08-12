import axios from 'axios';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500);
  console.log("Results: ", values);

  const data = {
      address: values.address,
      headline: values.headline,
      propdesc: values.propdesc,
      proptype: values.proptype,
      noofrooms: values.noofrooms,
      noofpeople: values.noofpeople,
      noofbathrooms: values.noofbathrooms,
      startdate: values.startdate,
      enddate: values.enddate,
      currency: values.currency,
      baserate: values.baserate,
      minstay: values.minstay,
      cleaningfee: values.cleaningfee
  }

  console.log("Data: ", data);
  //set the with credentials to true
  axios.defaults.withCredentials = true;
  //make a post request with the user data
  
  axios.post('http://localhost:3001/ListProperty',data)
      .then(response => {
          console.log("Status Code : ",response.status);
      });
});