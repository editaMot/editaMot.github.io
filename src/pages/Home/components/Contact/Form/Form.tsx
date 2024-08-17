import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../../../components";
import styles from "./Form.module.scss";
import { emailSending } from "../../../../../utils/emailSending";
import { useState } from "react";

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const Form: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    emailSending(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_MESSAGE, data)
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch(() => {
        setError("There was an error sending your message.");
      })
      .finally(() => {
        setLoading(false);
      });
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
      <Button text="Submit" type="outlined" size="small" disabled={loading} />
    </form>
  );
};
