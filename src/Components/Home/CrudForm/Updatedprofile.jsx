import React from "react";

const Updatedprofile = () => {
  return (
    <div className="md:p-8 flex justify-center items-center p-4  ">
      <div className="md:p-10 max-w-full md:w-[60%] p-5 flex justify-center items-center   ">
        <div className="flex flex-col gap-5 w-full p-4 border rounded-md">
          <h1 className="text-bold text-2xl text-blue-400 text-center">
            Updated Form
          </h1>
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Name"
            // name={formdata.userName}
            // value={formdata.userName}
            // onChange={(e) =>
            //   setFormdata({ ...formdata, userName: e.target.value })
            // }
            required
          />
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Email"
            // name={formdata.userEmail}
            // value={formdata.userEmail}
            // onChange={(e) =>
            //   setFormdata({ ...formdata, userEmail: e.target.value })
            // }
            required
          />
          <input
            type="text"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Description"
            // name={formdata.userDescription}
            // value={formdata.userDescription}
            // onChange={(e) =>
            //   setFormdata({ ...formdata, userDescription: e.target.value })
            // }
            required
          />
          {/* <input
            type="tel"
            className="border rounded-md p-2 w-full outline-none"
            placeholder="Phone number"
            name={formdata.userNumber}
            value={formdata.userNumber}
            onChange={(e) =>
              setFormdata({ ...formdata, userNumber: e.target.value })
            }
            required
          /> */}
          {/* <textarea
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
          ></textarea> */}
          {/* <div className="flex justify-between gap-5">
            <button
              className={`px-4 py-2 text-white rounded-3xl ${buttonColor} w-full`}
              // className="px-4 py-2 text-white rounded-3xl bg-green-500 w-full"
              type="submit"
              // disabled={isFormDisabled()}
              // onClick={() => handleSubmit()}
              onClick={() => handleSaveUser()}
            >
              Save
            </button>
            <button
              className={`px-4 py-2 text-white rounded-3xl ${buttonColor} w-full`}
              // className="px-4 py-2 text-white rounded-3xl bg-green-500 w-full"
              type="submit"
              // disabled={isFormDisabled()}
              // onClick={() => handleSubmit()}
            >
              Update
            </button>
            <button
              className={`px-4 py-2 text-white rounded-3xl ${buttonColor} w-full`}
              // className="px-4 py-2 text-white rounded-3xl bg-red-500 w-full"
              type="submit"
              // disabled={isFormDisabled()}
              // onClick={() => handleSubmit()}
            >
              Delete
            </button>
          </div> */}

          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
};
export default Updatedprofile;
