import * as Yup from "yup";

export const purchaseCredit = Yup.object().shape({


  fullname: Yup.string()
    .required("Full name is required")
    .matches(/^[aA-zZ\s]+$/, "Please use only letters "),
    email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phoneNumber: Yup.number().required("Phone number is required")
               .min(10, 'Phone number must have at least 10 characters'),
  meterNumber: Yup.string()
  .required('Meter Number is required'),
  // .min(10, 'Password must have at least 10 characters'),

confirmMeterNumber: Yup.string()
  .required('Please enter the meter number again')
  .oneOf([Yup.ref('meterNumber'), null], 'Confirm Meter number does not match'),
});
