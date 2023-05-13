import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import {useState} from "react";
import emailJs from '@emailjs/browser';

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [sentSuccess, setSentSuccess] = useState(false);
	const [sentError, setSentError] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	function handleChange(event) {
		const {name, value} = event.target
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value
			}
		})
	}
	const handleSubmit = event => {
		event.preventDefault()

		setIsLoading(true)
		emailJs
			.send("service_q7mkbq5","template_fai1d53", formData, "RgP1ehTIYroNsVAcR")
			.then((response) =>
			{
				setSentSuccess(true)
				setSentError(false)
				console.log(response)
				setIsLoading(false)
			})
			.catch((err) => {
				setSentError(true)
				setSentSuccess(false)
				console.log(err)
				setIsLoading(false)
			});
	};

	return (
		<div className="w-full lg:w-1/2">
			{ isLoading &&
				<div className='lds-blur'>
					<div className="lds-facebook dark:lds-facebook-dark">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			}

			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						onChange={handleChange}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						onChange={handleChange}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							onChange={handleChange}
						></textarea>
					</div>
					{ (sentSuccess && !sentError) &&
						<div className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'>
							Great news! You've successfully sent your email and you can expect to hear back from us soon.
						</div> }
					{ (sentError && !sentSuccess) &&
						<div className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'>
							Sorry, the email failed to send. Please reach out to me via email or phone.
						</div> }

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
