import emailjs from "@emailjs/browser";
import { FormValues } from "../pages/Home/components/Contact/Form/Form";

export const emailSending = (
  templateId: string,
  data: FormValues
): Promise<void> => {
  const templateParams = {
    name: data.name,
    email: data.email,
    message: data.message,
  };

  return emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId,
      templateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log("Email successfully sent!", result.text);
    })
    .catch((error) => {
      console.error("Failed to send email:", error.text);
    });
};
