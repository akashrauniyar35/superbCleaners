import emailjs from '@emailjs/browser';

const postContactForm = async (prams: any) => {
    return await emailjs.send('service_t5e6t9e', 'template_ixu56tr', prams, '-hLjdYlLwweke00m9')
        .then((result) => {
            return result.text
        }, (error) => {
            console.log("results", error.text);
        });
}

export default postContactForm