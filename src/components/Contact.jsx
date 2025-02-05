import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});


const Contact = () => {
  const {values,handleChange,handleSubmit,touched,errors} = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema:validationSchema,
    onSubmit: (values,{resetForm}) => {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    },
  });

  return (
    <div className='mb-10 border rounded p-4'>
      <h1 className='text-white font-bold text-3xl  mb-10 text-center'>Contact Me</h1>
      <form
      onSubmit={handleSubmit}
       className='flex gap-4 items-center justify-center'>

       <div className='w-[250px] h-[250px]'>
        <img className='rounded h-full w-ful' src="/public/ecommerce.jpeg" alt="" />
       </div>

      <div className='w-[650px] flex flex-col gap-4'>
      <div className='  flex items-center gap-4'>
          <label htmlFor="name" className='text-white'>Name</label>
          <input
          className='w-full'
            name="name"
            type="text"
            placeholder="Enter name"
            value={values.name}
            onChange={handleChange}
          />
        {errors.name && <p className="text-red-500 inline">{errors.name}</p>}
        </div>
        <div className='w-full  flex items-center gap-4'>
        <label htmlFor="email"  className='text-white'>Email</label>
          <input
          className='w-full'
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
        {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <button type='submit'>Submit</button>
      </div>
      </form>
    </div>
  );
};

export default Contact;