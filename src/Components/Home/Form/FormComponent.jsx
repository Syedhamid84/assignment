import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [formdata, setFormdata] = useState({
    userName: "",
    userEmail: "",
    userCnic: "",
    userNumber: "",
    userMessage: "",
  });

  const isValidEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };
  const isValidPhone = (value) => {
    const phoneNumberRegex = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    return phoneNumberRegex.test(value);
  };
  const isValidCnic = (value) => {
    const CnicRegex = /^\d{5}-\d{7}-\d$/;
    return CnicRegex.test(value);
  };

  const isFormDisabled = () => {
    return (
      !isValidEmail(formdata.userEmail) ||
      formdata.userName === "" ||
      !isValidCnic(formdata.userCnic) ||
      !isValidPhone(formdata.userNumber) ||
      formdata.userMessage === ""
    );
  };

  const handleSubmit = () => {
    // if (isFormDisabled) {

        window.alert("forms submited succesfully");
        setFormdata({
          userName: "",
          userEmail: "",
          userCnic: "",
          userNumber: "",
          userMessage: "",
        });
    // }
    // else {
    //     window.alert("Please Enter Valid Data");


    // }
    
};
const buttonColor = isFormDisabled() ? "bg-gray-300" : "bg-blue-400";
  return (
    <div className="md:p-8 flex justify-center items-center p-4  ">
      <div className="md:p-10 max-w-full md:w-[60%] p-5 flex justify-center items-center   ">
        <div className="flex flex-col items-center gap-5 w-full p-4 border rounded-md">
          <h1 className="text-bold text-2xl text-blue-400">Contact Form</h1>
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Name"
            name={formdata.userName}
            value={formdata.userName}
            onChange={(e) =>
              setFormdata({ ...formdata, userName: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Email"
            name={formdata.userEmail}
            value={formdata.userEmail}
            onChange={(e) =>
              setFormdata({ ...formdata, userEmail: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="CNIC"
            name={formdata.userCnic}
            value={formdata.userCnic}
            onChange={(e) =>
              setFormdata({ ...formdata, userCnic: e.target.value })
            }
            required
          />
          <input
            type="tel"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Phone number"
            name={formdata.userNumber}
            value={formdata.userNumber}
            onChange={(e) =>
              setFormdata({ ...formdata, userNumber: e.target.value })
            }
            required
         
          />
          <textarea
            type="text"
            name={formdata.userMessage}
            value={formdata.userMessage}
            id=""
            placeholder="Message"
            className="border rounded-md p-2 w-full resize-none outline-none"
            onChange={(e) =>
              setFormdata({ ...formdata, userMessage: e.target.value })
            }
            rows={4}
            cols={50}
            required
            onKeyDown={(e) => {
                if (!isFormDisabled() && e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
          ></textarea>

          <button
            // className={`px-4 py-2 text-white rounded-3xl ${isFormDisabled ? 'bg-gray-300' : 'bg-blue-400'} w-[40%]`}
            className={`px-4 py-2 text-white rounded-3xl ${buttonColor} w-[40%]`}
            type="submit"
            disabled={isFormDisabled()}
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormComponent;
