import { validateApolloResponse } from "@app/common/utils/validate-apollo-response";
import { isLoggedInReactive } from "../store/reactive-vars";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCustomerLoginLazyQuery } from "@app/core/types";
import { LoginForm } from "../comoponents/login-form/login-form.component";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [sendPhoneNumber] = useCustomerLoginLazyQuery({
    fetchPolicy: "network-only",
  });

  const onFirstStepCallback = async (phone: string, password: string) => {
    const queryResult = await sendPhoneNumber({
      variables: { phone, password },
    });
    validateApolloResponse(queryResult);

    if (queryResult.data?.customerLoginPassword?.accessToken) {
      localStorage.setItem(
        "jwt",
        queryResult.data?.customerLoginPassword?.accessToken
      );
      isLoggedInReactive(true);
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <div className="my-12">
        <h1 className="text-3xl  text-center mb-12">
          Увійти до вашого кабінету Vroda
        </h1>
        <LoginForm onFirstStepCallback={onFirstStepCallback} />
      </div>
    </>
  );
};
