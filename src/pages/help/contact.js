import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    //using usehook for message box
    const data = useActionData();
    
    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <Form className="contact-form" method="POST" action="/help/contact">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>

                {data && data.error && <p>{data.error}</p>} {/* for showing message error */}
            </Form>
        </div>
    );
};

export const contactAction = async ( {request} ) => {
    const data = await request.formData();

    const submission ={
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission);

    //send post request
    if(submission.message.length < 10) {
        return {error: 'Message must be minimum 10 characters long'};
    }

    //redirect to user 
    return redirect('/');
}