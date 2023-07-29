document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector("#loadiframemap").innerHTML = `
                                <iframe class="contact__iframe"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7274267528815!2d-64.19936352359078!3d-31.39407849517458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432988aca3bf7f9%3A0x21f0bea3a751173!2sPaso%20de%20Uspallata%201054%2C%20X5008%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1690403230221!5m2!1ses-419!2sar"
                                ></iframe>
    `;
    },1000);
});

