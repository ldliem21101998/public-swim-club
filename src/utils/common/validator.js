// export const validateForm = (payload) => {
//   let tempErrors = {};
//   if (!payload.first_name) tempErrors.first_name = "First Name is required";
//   if (!payload.last_name) tempErrors.last_name = "Last Name is required";
//   if (!payload.phone) tempErrors.phone = "Phone Number is required";
//   if (!payload.gender) tempErrors.gender = "Gender is required";
//   if (!payload.email) {
//     tempErrors.email = "Email is required";
//   } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
//     tempErrors.email = "Email is not valid";
//   }
//   if (!payload.address) tempErrors.address = "Address is required";
//   if (!payload.date_of_birth)
//     tempErrors.date_of_birth = "Date of Birth is required";
//   setErrors(tempErrors);
//   return Object.keys(tempErrors).length === 0;
// };
