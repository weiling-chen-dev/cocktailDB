import styled from "styled-components";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const formSubmitAction = async ({ request }) => {
  const formData = await request.formData();
  const formDataObj = Object.fromEntries(formData);
  return postRequest(formDataObj);
  // try {
  //   const res = await axios.post(newsletterUrl, formDataObj);
  //   toast.success(res.data.msg);
  //   return redirectInSeconds();
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }
};

const postRequest = async (formDataObj) => {
  try {
    const res = await axios.post(newsletterUrl, formDataObj);
    toast.success(res.data.msg, { autoClose: 5000 });
    return res;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.status === 201) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });

  const navigation = useNavigation();

  return (
    <Section>
      <Form className="form" method="post">
        <h4>Subscribing Newsletter</h4>
        <div className="form-row">
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-row">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue="test@test.com"
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting"
            ? "submitting..."
            : actionData?.status === 201
            ? "Redirecting..."
            : "submit"}
        </button>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  .form {
    width: 100%;
    margin: 3rem auto;
    max-width: var(--fixed-width);
    padding: 3rem;
    box-shadow: var(--shadow-1);
    background-color: var(--white);
    border-radius: var(--borderRadius);
  }
  h4 {
    margin-bottom: 2.25rem;
    text-align: center;
  }
  .form-row {
    margin-bottom: 1.75rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
  input {
    padding: 0.35rem 0.8rem;
    width: 100%;
    border: 1px solid var(--grey-300);
    background-color: var(--grey-100);
  }
  button {
    margin-top: 1rem;
  }
`;
export default Newsletter;
