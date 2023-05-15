import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import {useParams} from "react-router-dom";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	let id = useParams().id - 1

	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson[id]
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
