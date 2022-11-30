
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});


function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input type="tel" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label>E-mail</label>
        <input type={"email"} {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default Form;