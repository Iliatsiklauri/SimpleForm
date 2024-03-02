const Form = () => {
  return (
    <div className="flex items-center justify-center flex-col font-semibold text-sm bg-white w-[90%]  gap-4 rounded-lg mb-20 md:mb-0">
      <input
        type="text"
        className="border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4] focus:outline-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md mt-6 md:mt-10"
        placeholder="First Name"
      />
      <input
        type="text"
        className="border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4] focus:outline-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md"
        placeholder="Last Name"
      />
      <input
        type="text"
        className="border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4] focus:outline-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md"
        placeholder="Email address"
      />
      <input
        type="text"
        className="border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4] focus:outline-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md"
        placeholder="Password"
      />
      <div className="h-14 w-[85%] bg-[#38CC8B] flex items-center justify-center rounded-md btn hover:bg-[#77E2B3]">
        <p className="text-white font-semibold leading-[26px]">CLAIM YOUR FREE TRIAL</p>
      </div>
      <p className="w-[85%] text-center text-[#BAB7D4] mb-7 text-xs font-medium">
        By clicking the button, you are agreeing to our
        <span className="text-[#FF7979] font-semibold"> Terms and Services</span>
      </p>
    </div>
  );
};

export default Form;
