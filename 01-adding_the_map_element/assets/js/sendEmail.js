const sendMail = contactForm => {
  emailjs
    .send('gmail', 'rosie', {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      project_request: contactForm.projectsummary.value
    })
    .then(
      response => {
        console.log('Success', response);
      },
      error => {
        console.log('Error', error);
      }
    );
  return false;
};
