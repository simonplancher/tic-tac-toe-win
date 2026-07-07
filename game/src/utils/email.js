import emailjs from "@emailjs/browser";

export function sendWinnerEmail(email) {
    return emailjs.send(
        "service_wp7dnr4",
        "template_jgtjo0m",
        {
            email,
        },
        "Ha_nfuLxGeD0qpI15"
    );
}