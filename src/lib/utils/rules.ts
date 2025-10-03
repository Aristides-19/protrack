import type { FieldPath, FieldValues, RegisterOptions } from "react-hook-form";

type Rule = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>() => RegisterOptions<TFieldValues, TFieldName>;

export const email: Rule = () => ({
  required: "El correo es obligatorio",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "El correo no es válido",
  },
  maxLength: {
    value: 254,
    message: "El correo no debe exceder 254 caracteres",
  },
});

export const password: Rule = () => ({
  required: "La contraseña es obligatoria",
  minLength: { value: 8, message: "Debe tener al menos 8 caracteres" },
  maxLength: { value: 64, message: "No debe exceder 64 caracteres" },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    message: "Debe incluir mayúscula, minúscula, número y caracter especial",
  },
});
