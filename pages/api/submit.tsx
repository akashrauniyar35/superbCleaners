import emailjs from '@emailjs/browser';

const onSubmit = async (prams: any) => {
    return await emailjs.send('service_y6ig5jq', 'template_40zqqvf', prams, 'vfr7w_ettAbPZ-clt')
        .then((result) => {
            return result.text
        }, (error) => {
            console.log("results", error.text);
        });

}

export default onSubmit