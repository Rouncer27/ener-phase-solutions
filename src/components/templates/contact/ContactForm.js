import React, { useState } from "react"
import styled from "styled-components"
import {
  B1GunMetal,
  Btn1One,
  colors,
  medWrapper,
  fontSizer,
  Btn1Two,
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
    projectType: "",
    location: "",
    howHelp: "",
    details: "",
    images: null,
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

  const handleOnImageChange = event => {
    if (formData.images) {
      if (event.target.files && event.target.files[0]) {
        const newFiles = [...formData.images, ...event.target.files]
        setFormData({
          ...formData,
          images: newFiles,
        })
      }
    } else {
      if (event.target.files && event.target.files[0]) {
        setFormData({
          ...formData,
          images: [...event.target.files],
        })
      }
    }
  }

  const handleClearImages = () => {
    setFormData({
      ...formData,
      images: [],
    })
    document.querySelector(".upload-image-field input").value = ""
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

    let fl = formData.images ? formData.images.length : []
    let i = 0

    while (i < fl) {
      bodyFormData.append(`image-${i}`, formData.images[i])
      i++
    }

    try {
      const response = await submitToServer(data.contactFormId, bodyFormData)

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
    } catch (err) {
      console.log("ERROR: ", err)
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: [],
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
      projectType: "",
      location: "",
      howHelp: "",
      details: "",
      images: null,
    })

    document.querySelector(".upload-image-field input").value = ""
  }

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="form-details">
          <p>
            Fill out the information below to learn more about how we can help.
          </p>
          <p>
            We aim to get back to you within 3 business days of inquiry sent.
          </p>
        </div>
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

              <InputField className="upload-image-field">
                {formData.images && (
                  <div className="img-preview">
                    {formData.images.map((img, i) => (
                      <div className="img-item">
                        <img key={i} src={URL.createObjectURL(img)} alt="" />
                      </div>
                    ))}
                    <p className="images-uploaded">
                      {formData.images.length} Images Selected.
                    </p>
                  </div>
                )}
                <label htmlFor="images">
                  Upload Images for Reference
                  <input
                    name="images"
                    type="file"
                    id="images"
                    multiple
                    onChange={handleOnImageChange}
                  />
                </label>
              </InputField>
              <button
                className="clear-images"
                onClick={handleClearImages}
                type="button"
              >
                Clear All Images
              </button>
            </div>
            <div className="form-right">
              <DropdownInputStyled>
                <label htmlFor="projectType">
                  What type of service are you looking for?
                  <span className="required">&#42;</span>
                </label>
                <select
                  value={formData.projectType}
                  name="projectType"
                  id="projectType"
                  onChange={handleOnChange}
                >
                  <option value="">
                    -- Please choose a project / service --
                  </option>
                  <option value="Power System Design">
                    Power System Design
                  </option>
                  <option value="Power Systems Engineering">
                    Power Systems Engineering
                  </option>
                  <option value="Design-Buld Engineering">
                    Design-Buld Engineering
                  </option>
                  <option value="Power System Evaluation">
                    Power System Evaluation
                  </option>
                  <option value="Maintenance Planning">
                    Maintenance Planning
                  </option>
                  <option value="Retrofits/Upgrades">Retrofits/Upgrades</option>

                  <option value="Technical Training">Technical Training</option>

                  <option value="Multi-year Maintenance Contracts">
                    Multi-year Maintenance Contracts
                  </option>
                  <option value="Medium Voltage Terminations">
                    Medium Voltage Terminations
                  </option>
                </select>
              </DropdownInputStyled>
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
            </div>

            <div className="required-info">
              <p>&#42; required fields</p>
            </div>
            <div className="btn-submit">
              <button type="submit">Submit Form</button>
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

  .form-details {
    width: 100%;
    margin-bottom: 2.5rem;
    padding-left: 2rem;

    p {
      ${B1GunMetal};
      margin-bottom: 0;
    }
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

      .clear-images {
        ${Btn1Two};
        margin: 0 2rem;
      }

      .required-info {
        position: absolute;
        left: 20rem;
        bottom: 1.5rem;

        p {
          ${B1GunMetal};
          font-weight: bold;
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

  .img-preview {
    flex-wrap: wrap;
    display: flex;

    .img-item {
      width: 5rem;
    }
  }

  .images-uploaded {
    ${B1GunMetal};
    ${fontSizer(1.2, 1.4, 76.8, 150, 1.4)};
    width: 100%;
    margin: 0;
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

const DropdownInputStyled = styled.div`
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
  }

  select {
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
`

export default ContactForm
