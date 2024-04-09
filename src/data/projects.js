// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import LexzurLogo from '../images/Lexzur-Virtual-Backrgound.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Software Engineer at Lexzur',
		category: 'Web Application',
		img: LexzurLogo,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: ['Laravel', 'codeigniter', 'Web Application', 'MySQL', 'MSSQL', 'API', 'Messenger', 'Marketplace'],
		},
	},
	{
		id: 2,
		title: 'OXO Guard Management System',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: ['Laravel', 'Tailwind', 'Web Application', 'Datatables', 'Select2', 'API', 'MySQL'],
		},
	},
	{
		id: 3,
		title: 'Customer Onboarding and Verification System',
		category: 'Web Application',
		img: MobileImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: ['React', 'Laravel', 'API', 'TDD', 'PostgreSQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application'],
		},
	},
	{
		id: 4,
		title: 'Shopping Hive: E-Commerce Sales Insights Retrieval Platform',
		category: 'Web Application',
		img: UIImage1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: ['React', 'Laravel', 'API', 'TDD', 'MySQL', 'Docker', 'Documentation', 'Tailwind', 'Web Application'],
		},
	},
	{
		id: 5,
		title: 'Developing Features in a Desktop App',
		category: 'Desktop Application',
		img: WebImage1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: ['C#', '.NET', 'SQLite', 'Desktop Application'],
		},
	}
];
