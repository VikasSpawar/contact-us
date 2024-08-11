"use client";
import React, { useState } from "react";

// Define the form data type
interface FormData {
  full_name: string;
  email_id: string;
  phone_number: string;
  message: string;
  country_of_residence: string;
  office_location: string;
}

// Define the props for the form component (if any)
interface CallbackFormProps {}

const CallbackForm: React.FC<CallbackFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email_id: "",
    phone_number: "",
    message: "",
    country_of_residence: "",
    office_location: "Ontario", // Default value
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    
    const { name, value } = e.target;

    if(errors.hasOwnProperty(name)){
        let newErrors={...errors}
        delete newErrors[name]
        console.log(newErrors)
       setErrors(newErrors)
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
  const { full_name, email_id, phone_number,  country_of_residence } = formData;

    const errors: { [key: string]: string } = {};

    if (!full_name.trim()) {
      errors.full_name = 'Full Name is required.';
    } else if (full_name.trim().split(' ').length < 2) {
      errors.full_name = 'Full Name must include both first and last name.';
    }

    if (!email_id.trim()) {
      errors.email_id = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email_id)) {
      errors.email_id = 'Email Address is invalid.';
    }

    if (!phone_number.trim()) {
      errors.phone_number = 'Phone Number is required.';
    } else if (!/^\d{10}$/.test(phone_number)) {
      errors.phone_number = 'Phone Number must be valid and exactly 10 digits.';
    }

    if (!country_of_residence.trim()) {
      errors.country_of_residence = 'Country of Residence is required.';
    }

    return errors;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let full_name=formData.full_name.trim().split(" ")

    //  validation
    let validationErrors=validate()
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    const data = {...formData , name:full_name[0], last_name:full_name[full_name.length-1]}
 

   
  
    setLoading(true);
    try {
      const response = await fetch("/api/create-callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          full_name: "",
          email_id: "",
          phone_number: "",
          message: "",
          country_of_residence: "",
          office_location: "Ontario",
        });
        setError(null);
        setLoading(false);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };


  return (
    <form
      className="w-full border h-[605px] border-light-primary rounded-lg bg-lightest-primary p-12 flex flex-col justify-between gap-4"
      onSubmit={handleSubmit}
    >
      <div className="">
      <label className={`${formData.full_name&&'hidden'} absolute my-2 mx-2 text-dark-gray  after:content-['*'] after:text-red-500`} htmlFor="full_name">
            Full Name 
        </label>
        <input
        className={`border-2 p-2 w-full ${errors.full_name ? 'border-red-500' : 'border-light-primary'}`}
          
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleInputChange}
          required
        />
           {errors.full_name&&<p className="text-red-500 px-2">{errors.full_name}*</p>}
      </div>
   
      <div>
      <label className={`${formData.email_id&&'hidden'} absolute my-2 mx-2 text-dark-gray  after:content-['*'] after:text-red-500`} htmlFor="full_name">
            Email 
        </label>
        <input
         
          type="email"
          id="email_id"
          name="email_id"
          value={formData.email_id}
          onChange={handleInputChange}
          required
        />
         {errors.email_id&&<p className="text-red-500 px-2">{errors.email_id}*</p>}
      </div>
      <div>
      <label className={`${formData.phone_number&&'hidden'} absolute my-2 mx-2 text-dark-gray  after:content-['*'] after:text-red-500`} htmlFor="full_name">
           Phone number
        </label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
          required
        />
        {errors.phone_number&&<p className="text-red-500 px-2">{errors.phone_number}*</p>}
      </div>

      <div>
      <label className={`${formData.country_of_residence&&'hidden'} absolute my-2 mx-2 text-dark-gray  after:content-['*'] after:text-red-500`} htmlFor="full_name">
      Country of Residence
        </label>
        <input
        
          type="text"
          id="country_of_residence"
          name="country_of_residence"
          value={formData.country_of_residence}
          onChange={handleInputChange}
        />
        {errors.country_of_residence&&<p className="text-red-500 px-2">{errors.country_of_residence}*</p>}
      </div>
      <div>
        <select
          id="office_location"
          name="office_location"
          value={formData.office_location}
          onChange={handleInputChange}
        >
          <option value="Ontario">Ontario</option>
          <option value="New Brunswick">New Brunswick</option>
        </select>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Request submitted successfully!</p>
      )}
      <textarea
        placeholder="How can we serve you"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <button
        className="border  p-3 bg-[#263238] rounded-lg text-white"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <div className="mx-auto border-l-2 border-blue-400 rounded-full  animate-spin w-6 h-6 "></div>
        ) : (
            success ? "Request submitted successfully!" : 
          "Request a callback"
        )}{" "}
      </button>
    </form>
  );
};

export default CallbackForm;
