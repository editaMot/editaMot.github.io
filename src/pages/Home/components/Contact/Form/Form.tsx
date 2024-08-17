import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../../../components";
import styles from "./Form.module.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        label="Name"
        id="name"
        error={errors?.name?.message}
        {...register("name", { required: "Enter your name" })}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        error={errors?.email?.message}
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address",
          },
        })}
      />
      <Input
        label="Message"
        id="message"
        variant="textarea"
        error={errors?.message?.message}
        {...register("message", { required: "Enter your message" })}
      />
      <Button text="Submit" type="outlined" size="small" />
    </form>
  );
};
