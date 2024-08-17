import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Error, Input, Loader } from "../../../../../components";
import { emailSending } from "../../../../../utils/emailSending";
import styles from "./Form.module.scss";

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    setError(false);
    setSuccess(null);

    emailSending(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_MESSAGE, data)
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <Loader />;

  if (error)
    return (
      <Error
        errorMessage={
          "There was an error sending your message. Try again later."
        }
      />
    );

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
      <Button text="Submit" type="outlined" size="small" disabled={loading} />
    </form>
  );
};
