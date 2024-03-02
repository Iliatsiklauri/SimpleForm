import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type dataType = {
  name: string;
  LastName: string;
  Email: string;
  Password: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('First Name cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid name'),
  LastName: yup
    .string()
    .required('Last Name cannot be empty')
    .matches(/^[A-Za-z]+$/, 'Enter a valid Last name'),
  Email: yup
    .string()
    .required('Looks like this is not an email')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Enter a valid Email'),
  Password: yup
    .string()
    .required('Password cannot be empty')
    .min(6, 'minimum length is 6'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataType>({
    resolver: yupResolver(schema),
  });

  const sbmt = (data: dataType) => {
    console.log(data);
  };

  return (
    <form
      className="flex items-center justify-center flex-col font-semibold text-sm bg-white w-[90%]  gap-5 md:gap-6 rounded-lg mb-20 md:mb-0"
      onSubmit={handleSubmit(sbmt)}
    >
      <div className="flex items-center justify-center w-full relative">
        <input
          type="text"
          className={`border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md ${
            errors.name
              ? 'outline-[#FF7979] border-[#FF7979] border-2 '
              : 'border-[#DEDEDE] outline-[#5E54A4]'
          } mt-6 md:mt-10"`}
          placeholder={errors.name ? '' : 'First Name'}
          maxLength={20}
          {...register('name')}
        />
        {errors.name && (
          <img
            src="Group 11.svg"
            alt=""
            className="absolute top-10 right-12 md:right-16"
          />
        )}
        {errors.name && (
          <span className="absolute bottom-[-20px] right-8 md:right-12 spans">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center w-full relative">
        <input
          type="text"
          className={`border-[1px] border-[#DEDEDE] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4]  focus:placeholder:opacity-100 p-4 w-[85%] rounded-md ${
            errors.LastName
              ? 'outline-[#FF7979] border-[#FF7979] border-2'
              : 'border-[#DEDEDE] outline-[#5E54A4]'
          }`}
          placeholder={errors.LastName ? '' : 'Last Name'}
          maxLength={20}
          {...register('LastName')}
        />
        {errors.LastName && (
          <img
            src="Group 11.svg"
            alt=""
            className="absolute top-4 right-12 md:right-16"
          />
        )}
        {errors.LastName && (
          <span className="absolute bottom-[-20px] right-8 md:right-12 spans">
            {errors.LastName.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center w-full relative">
        <input
          type="email"
          className={`border-[1px] border-[#DEDEDE] ${
            errors.Email
              ? 'placeholder:text-[#FF7979] placeholder:opacity-100'
              : 'placeholder:text-[#3D3B48]'
          } placeholder:opacity-60 caret-[#5E54A4] focus:placeholder:opacity-100 p-4 w-[85%] rounded-md ${
            errors.Email
              ? 'outline-[#FF7979] border-[#FF7979] border-2'
              : 'border-[#DEDEDE] outline-[#5E54A4]'
          }`}
          placeholder={errors.Email ? 'email@example.com' : 'Email address'}
          maxLength={30}
          {...register('Email')}
        />
        {errors.Email && (
          <img
            src="Group 11.svg"
            alt=""
            className="absolute top-4 right-12 md:right-16"
          />
        )}
        {errors.Email && (
          <span className="absolute bottom-[-20px] right-8 md:right-12 spans">
            {errors.Email.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center w-full relative">
        <input
          type="password"
          className={`border-[1px] placeholder:text-[#3D3B48] placeholder:opacity-60 caret-[#5E54A4]  focus:placeholder:opacity-100 p-4 w-[85%] rounded-md ${
            errors.Password
              ? 'outline-[#FF7979] border-[#FF7979] border-2'
              : 'border-[#DEDEDE] outline-[#5E54A4]'
          }`}
          placeholder={errors.Password ? '' : 'Password'}
          maxLength={30}
          {...register('Password')}
        />
        {errors.Password && (
          <img
            src="Group 11.svg"
            alt=""
            className="absolute top-4 right-12 md:right-16"
          />
        )}
        {errors.Password && (
          <span className="absolute bottom-[-20px] right-8 md:right-12 spans">
            {errors.Password.message}
          </span>
        )}
      </div>
      <button
        className="h-14 w-[85%] bg-[#38CC8B] flex items-center justify-center rounded-md btn hover:bg-[#77E2B3]"
        type="submit"
      >
        <p className="text-white font-semibold leading-[26px]">CLAIM YOUR FREE TRIAL</p>
      </button>
      <p className="w-[85%] text-center text-[#BAB7D4] mb-7 text-xs font-medium">
        By clicking the button, you are agreeing to our
        <span className="text-[#FF7979] font-semibold"> Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
