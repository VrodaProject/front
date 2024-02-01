import { validateApolloResponse } from "@app/common/utils/validate-apollo-response";
import { isLoggedInReactive } from "../store/reactive-vars";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  useCustomerLoginLazyQuery,
  useCustomerVerifyCodeLazyQuery,
} from "@app/core/types";
import { LoginForm } from "../comoponents/login-form/login-form.component";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [sendPhoneNumber] = useCustomerLoginLazyQuery({
    fetchPolicy: "network-only",
  });
  const [sendPhoneWithCode] = useCustomerVerifyCodeLazyQuery({
    fetchPolicy: "network-only",
  });

  const onFirstStepCallback = async (phoneNumber: string) => {
    const queryResult = await sendPhoneNumber({ variables: { phoneNumber } });
    validateApolloResponse(queryResult);
  };

  const onSecondStepCallback = async (phoneNumber: string, code: string) => {
    const queryResult = await sendPhoneWithCode({
      variables: { phoneNumber, code },
    });
    validateApolloResponse(queryResult);
    if (queryResult.data?.customerVerifyCode?.accessToken) {
      localStorage.setItem(
        "jwt",
        queryResult.data?.customerVerifyCode?.accessToken
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
      <div>
        <h1 className="text-3xl  text-center mb-12">
          Увійти до вашого кабінету Vroda
        </h1>
        <LoginForm
          onFirstStepCallback={onFirstStepCallback}
          onSecondStepCallback={onSecondStepCallback}
        />
      </div>
    </>
  );
};
