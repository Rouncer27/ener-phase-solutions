import React, { useState } from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  B2White,
  Btn1Blue,
  Btn1One,
  colors,
  H2White,
  medWrapper,
  standardWrapper,
} from "../../../styles/helpers"

import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(data.bookingFormId, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })

    setFormData({
      yourName: "",
      yourEmail: "",
      phone: "",
      message: "",
    })
  }

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="contact-form">
          <form onSubmit={handleOnSubmit}>
            <div className="form-left">
              <InputField>
                <label htmlFor="yourName">
                  Name <span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "yourName"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a name.
                  </span>
                  <input
                    name="yourName"
                    type="text"
                    value={formData.yourName}
                    id="yourName"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <InputField>
                <label htmlFor="yourEmail">
                  Email <span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "yourEmail"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a email.
                  </span>
                  <input
                    name="yourEmail"
                    type="email"
                    value={formData.yourEmail}
                    id="yourEmail"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <InputField>
                <label htmlFor="phone">
                  phone number<span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "phone"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a phone number.
                  </span>
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    id="phone"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <InputField>
                <label htmlFor="location">
                  Project Location<span className="required">&#42;</span>
                  <span
                    className={`error-message ${
                      formStatus.errors.findIndex(
                        error => error.idref === "location"
                      ) !== -1 && " error-active"
                    }`}
                  >
                    You must input a Project Location.
                  </span>
                  <input
                    name="location"
                    type="text"
                    value={formData.location}
                    id="location"
                    onChange={handleOnChange}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
            </div>
            <div className="form-right">
              <InputField size="full">
                <label htmlFor="howHelp">
                  How can we help you?<span className="required">&#42;</span>
                  <span
                    className={`error-message${
                      formStatus.errors.findIndex(
                        error => error.idref === "howHelp"
                      ) !== -1
                        ? " error-active"
                        : ""
                    }`}
                  >
                    Required Field
                  </span>
                  <textarea
                    name="howHelp"
                    value={formData.howHelp}
                    id="howHelp"
                    onChange={handleOnChange}
                    rows={6}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>

              <InputField size="full">
                <label htmlFor="details">
                  Additional Details<span className="required">&#42;</span>
                  <span
                    className={`error-message${
                      formStatus.errors.findIndex(
                        error => error.idref === "details"
                      ) !== -1
                        ? " error-active"
                        : ""
                    }`}
                  >
                    Required Field
                  </span>
                  <textarea
                    name="details"
                    value={formData.details}
                    id="details"
                    onChange={handleOnChange}
                    rows={6}
                    aria-required="true"
                    required
                  />
                </label>
              </InputField>
              <div className="btn-submit">
                <button type="submit">Submit</button>
              </div>
            </div>

            <div className="required-info">
              <p>&#42; required fields</p>
            </div>
          </form>
        </div>
      </div>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    max-width: 105rem !important;
    margin-right: auto;
    margin-left: 0;
    position: relative;
    justify-content: flex-start;

    @media (min-width: 768px) {
    }
    @media (min-width: 1025px) {
      padding-left: 6vw;
    }
  }

  .background-logo {
    position: absolute;
    top: 5rem;
    right: -2.5rem;
    width: 30rem;
    z-index: 1;
  }

  .contact-form {
    position: relative;
    width: 100%;
    z-index: 10;

    form {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: calc(100%);

      .form-right {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(50%);
        }
      }

      .form-left {
        width: calc(100%);

        @media (min-width: 768px) {
          width: calc(50%);
        }
      }

      .required-info {
        position: absolute;
        right: 2rem;
        bottom: 0;

        p {
          ${B1GunMetal};
          margin: 0;
        }
      }

      .btn-submit {
        margin-top: 2.5rem;
        margin-left: 2rem;

        button {
          ${Btn1One};
        }
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    margin: 1rem 2rem;
  }

  label {
    ${B1GunMetal};
    display: block;
    width: 100%;
    font-weight: bold;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      color: #000;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      background-color: #fff;
      border: 0.25rem ${colors.colorAccent} solid;
      border-radius: 5px;
    }
  }
`

export default ContactForm
