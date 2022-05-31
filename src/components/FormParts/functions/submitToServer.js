import axios from "axios"

const submitToWebServer = async (formID, data) => {
  const FORM_POST_URL = `${process.env.GATSBY_CONTACT_FORM}/${formID}/feedback`
  const config = { headers: { "Content-Type": "multipart/form-data" } }
  const serverResponse = await axios.post(FORM_POST_URL, data, config)

  if (serverResponse.data.status === "mail_sent") {
    return { errors: false, errorMessages: [] }
  } else {
    return { errors: true, errorMessages: serverResponse.data.invalid_fields }
  }
}

export default submitToWebServer
