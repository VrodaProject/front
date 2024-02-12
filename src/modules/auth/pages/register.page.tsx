import { FetchResult } from "@apollo/client";

import { validateApolloResponse } from "@app/common/utils/validate-apollo-response";
import { isLoggedInReactive } from "../store/reactive-vars";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  useCustomerRegisterMutation,
  CustomerRegisterMutation,
} from "./../../../core/types";
import { RegisterForm } from "../comoponents/register-form/register-form-component";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [sendPhoneNumber] = useCustomerRegisterMutation({
    fetchPolicy: "network-only",
  });

  const onFirstStepCallback = async (
    phone: string,
    password: string,
    address: string,
    name: string
  ) => {
    const queryResult: FetchResult<CustomerRegisterMutation> =
      await sendPhoneNumber({
        variables: { phone, password, address, name },
      });

    if (queryResult.data?.customerRegister?.accessToken) {
      localStorage.setItem(
        "jwt",
        queryResult.data?.customerRegister?.accessToken
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
      <div className="my-12 ">
        <h1 className="text-3xl  text-center mb-12">
          Зареєструйте ваш кабінет Vroda
        </h1>
        <RegisterForm onFirstStepCallback={onFirstStepCallback} />
      </div>
    </>
  );
};
