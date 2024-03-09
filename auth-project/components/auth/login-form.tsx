import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLaber="Bem-Vindo de volta"
      backButtonLabel="Não possui uma conta?"
      backButtonHref="/atuh/register"
      showlSocial
    >
      Formulário de Login
    </CardWrapper>
  );
};