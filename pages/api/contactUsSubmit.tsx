import emailjs from '@emailjs/browser';

const contactUsSubmit = async (prams: any) => {
    return await emailjs.send('service_y6ig5jq', 'template_ameptjf', prams, 'vfr7w_ettAbPZ-clt')
        .then((result) => {
            return result.text
        }, (error) => {
            console.log("results", error.text);
        });
}

export default contactUsSubmit