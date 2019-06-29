import http from "./http";

const contactFormService = {
    submit(data) {
        return http.post('/contact-us', data)
    }
}

export default contactFormService
