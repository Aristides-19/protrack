import { Input, Widget } from "@components";
import { LoginMutation, Rule } from "@lib";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaKey, FaUser } from "react-icons/fa";

const Login = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
    mode: "all",
  });
  const login = LoginMutation.useLogin();

  const onSubmit: SubmitHandler<FormValues> = data => login.mutate(data);

  return (
    <div className="size-full flex flex-col items-center justify-center gap-12">
      <object type="image/svg+xml" data="/logo.svg" className="w-[150px]" />
      <form
        noValidate
        className="flex flex-col gap-4 w-full max-w-[300px] px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input.Text
          control={control}
          name="email"
          rules={Rule.email<FormValues, "email">()}
          inputProps={{ type: "email", placeholder: "Correo electrónico", autoComplete: "email" }}
          left={<FaUser size={16} />}
        />
        <Input.Text
          control={control}
          name="password"
          rules={Rule.password<FormValues, "password">()}
          inputProps={{
            type: "password",
            placeholder: "Contraseña",
            autoComplete: "current-password",
          }}
          left={<FaKey size={16} />}
        />
        <Widget.Button type="submit" className="btn-primary">
          Entrar
        </Widget.Button>
      </form>
    </div>
  );
};

type FormValues = {
  email: string;
  password: string;
};

export default Login;
