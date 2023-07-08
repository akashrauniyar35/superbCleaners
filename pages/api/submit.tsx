import emailjs from '@emailjs/browser';

const onSubmit = async (prams: any) => {
    return await emailjs.send('service_t5e6t9e', 'template_1k9e7nl', prams, '-hLjdYlLwweke00m9')
        .then((result) => {
            return result.text
        }, (error) => {
            console.log("results", error.text);
        });

}

export default onSubmit