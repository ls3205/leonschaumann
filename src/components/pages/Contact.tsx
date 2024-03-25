import React from "react";
import Page from "../Page";
import ContactForm from "../ContactForm";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <Page id="contact">
            <div className="absolute left-[5%] top-1/2 flex h-[85%] w-[90%] -translate-y-1/2 flex-col justify-center md:left-[30%] md:top-[15%] md:h-3/4 md:w-1/2 md:-translate-y-0">
                <ContactForm />
            </div>
        </Page>
    );
};

export default Contact;
