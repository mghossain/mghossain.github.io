// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
	{
		id: 1,
		ProjectHeader: {
			title: 'OXO Guard Management System',
				publishDate: 'Dec 2022 - Present',
				tags: ['Laravel', 'Tailwind', 'Web Application', 'Datatables', 'Select2', 'API', 'MySQL'],
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
			ProjectInfo: {
		ClientHeading: 'About Client',
			CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'OXO-GUARD',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Guard Management Platform',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://oxoguard.com/',
			},
			{
				id: 4,
				title: 'Phone',
				details: '0096171686512',
			},
		],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
		'Track On-site presence and movement of Security guards. Create and assign site tours to guards to keep them active on-site. ',
			Technologies: [
			{
				title: 'Tools & Technologies',
				techs: ['Laravel', 'Tailwind', 'Web Application', 'Datatables', 'Select2', 'API', 'MySQL'],
			},
		],
			ProjectDetails: [
			{
				heading: 'Milestone: Paginate and add filter functionality',
				details: [
					{
						id: 1,
						details:
							'•\tDeveloped frontend using blades, tailwind, Datatables.js, select2.js, and Ajax.'
					},{
						id: 2,
						details:
							'•\tRefactor and improve code with reusability and readability.',
					},{
						id: 3,
						details:
							'•\tImplement new features utilizing complex search and filter.',
					},{
						id: 4,
						details:
							'•\tApplied web development fundamentals.',
					},
				]
			},
			{
				heading: 'Milestone: Refactor Backend Code',
				details: [
					{
						id: 1,
						details:
							'•\tDeveloped backend using PHP and Laravel.'
					},{
						id: 2,
						details:
							'•\tImplement Microservices and Repository architecture.'
					},{
						id: 3,
						details:
							'•\tImprove Queries being done on the Database.'
					},{
						id: 4,
						details:
							'•\tRefactor and improve controllers with reusability and readability.'
					},{
						id: 4,
						details:
							'•\tImplement new features.'
					},
				]
			},
		],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/michael-ghossain-lb/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/',
			},
		],
	},
		RelatedProject: {
			title: 'Related Projects',
				Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},
	{id: 2,
		ProjectHeader: {
			title: 'Customer Onboarding and Verification System',
			publishDate: 'Oct 2022 – Dec 2022',
			tags: ['React', 'Laravel', 'API', 'TDD', 'PostgreSQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application'],
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Freelance Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-Stack Development & UI Design',
				},
				{
					id: 3,
					title: 'Phone',
					details: '0096171686512',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Web App that manages Customers and verifies their phone number using a number validation API.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['React', 'Laravel', 'API', 'TDD', 'PostgreSQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application']
				},
			],
			ProjectDetails: [
				{
					heading: 'Project: Customer Onboarding and Verification System',
					details: [
						{
							id: 1,
							details:
								'•\tImplement a basic application with a web-frontend and backend service.'
						},{
							id: 2,
							details:
								'•\tCreate Micro-Service for Validation of Mobile Number using 3rd party API.',
						},{
							id: 3,
							details:
								'•\tCreate APIs for customers integration.',
						},{
							id: 4,
							details:
								'•\tDevelop frontend using React.js, Tailwind.',
						},{
							id: 5,
							details:
								'•\tDeveloped backend using PHP, Laravel and PostgreSQL.',
						},{
							id: 6,
							details:
								'•\tUse TDD to create the app and write some automated testing scenarios.',
						},{
							id: 7,
							details:
								'•\tCreate a documentation for the entire app.',
						},{
							id: 7,
							details:
								'•\tContainerize the solution in a Docker image and include instructions to run/deploy the container. ',
						},
					]
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/michael-ghossain-lb/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},
	{id: 3,
		ProjectHeader: {
			title: 'Shopping Hive: E-Commerce Sales Insights Retrieval Platform',
			publishDate: 'Feb 2023 – Mar 2023',
			tags: ['React', 'Laravel', 'API', 'TDD', 'MySQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application'],
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Shopping Hive - Freelance Project',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-Stack Development & UI Design',
				},
				{
					id: 3,
					title: 'Phone',
					details: '0096171686512',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Shopping Hive is an online shopping platform which helps the sales team gather data in order to produce targeted discounts.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['React', 'Laravel', 'API', 'TDD', 'PostgreSQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application']
				},
			],
			ProjectDetails: [
				{
					heading: 'Project: E-Commerce Sales Insights Retrieval Platform',
					details: [
						{
							id: 1,
							details:
								'•\tImplement a basic application with a web-frontend and backend service.'
						},{
							id: 2,
							details:
								'•\tCreate APIs for products purchase.',
						},{
							id: 3,
							details:
								'•\tCreate APIs for the products’ sales statistics.',
						},{
							id: 4,
							details:
								'•\tDevelop frontend using React.js, Tailwind.',
						},{
							id: 5,
							details:
								'•\tDeveloped backend using PHP, Laravel and MySQL.',
						},{
							id: 6,
							details:
								'•\tUtilized the repository design pattern for efficient database access and code organization.',
						},{
							id: 7,
							details:
								'•\tMake use of TDD to create the app and write some automated testing scenarios.',
						},{
							id: 7,
							details:
								'•\tCreate a documentation for the entire app.',
						},{
							id: 7,
							details:
								'•\tContainerize the solution in a Docker image and include instructions to run/deploy the container. ',
						},
					]
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/michael-ghossain-lb/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},
	{id: 4,
		ProjectHeader: {
			title: 'Developing Features in a Desktop App',
			publishDate: 'Jan 2021 – Oct 2022',
			tags: ['C#', '.NET', 'SQLite', 'Desktop Application'],
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'General Security',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-Stack Development & Research ',
				},
				{
					id: 3,
					title: 'Phone',
					details: '0096171686512',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Refactor and improve code with reusability and readability.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['C#', '.NET', 'SQLite', 'Desktop Application']
				},
			],
			ProjectDetails: [
				{
					heading: 'Project: Developing Features in an App',
					details: [
						{
							id: 1,
							details:
								'•\tDevelop and improve the App using the .NET framework, C#, SQLite.'
						},{
							id: 2,
							details:
								'•\tRefactor and improve code with reusability and readability.',
						},{
							id: 3,
							details:
								'•\tImplement new features and maintaining existing codebases',
						},{
							id: 4,
							details:
								'•\tImplement Client/Server architecture.',
						},{
							id: 5,
							details:
								'•\tOversee the installation and onboarding of the app.',
						},{
							id: 6,
							details:
								'•\tResearch and develop new features.',
						}
					]
				}
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/in/michael-ghossain-lb/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},

];
