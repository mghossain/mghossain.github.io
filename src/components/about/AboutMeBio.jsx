import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import {FiArrowDownCircle} from "react-icons/fi";

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	function bioStyling(bio) {
		if (bio === 'Tools & Technologies')
			return 'font-bold text-center mt-5'
		if (bio === 'Tech Stack:' || bio === 'Agile Skills:')
			return 'font-semibold'
	}

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-xl w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className={ bioStyling(bio.bio) + ' mb-4 text-ternary-dark dark:text-ternary-light text-lg' }
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
				<a
					download="Michael Ghossain - Web Developer CV 2023.pdf"
					href="/files/Michael Ghossain - Web Developer CV 2023.pdf"
					className="font-general-medium  flex justify-center mx-auto mt-12 items-center w-36 sm:w-48 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
					<span className="text-sm sm:text-lg font-general-medium duration-100">
						Download CV
					</span>

				</a>
			</div>

		</div>
	);
};

export default AboutMeBio;
