import Highlight from "@components/Highlight";
import useMediaQuery from "@utils/useMediaQuery";
import { motion } from "framer-motion";
import { FC } from "react";

export const More: FC = () => {
	return (
		<div className="w-full flex flex-col md:flex-row text-center md:text-right mt-24">
			<div className="w-1/5 lg:w-1/2 px-8 sm:px-20 md:px-24 md:pt-28 2xl:pl-56 flex flex-row relative">
				{!useMediaQuery(1024) && (
					<>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/zama.JPG?raw=true"
							} // Additional image 1
							className="w-[300px] rounded-lg -mt-8 ml-4 absolute left-[25px] 2xl:left-40 top-[400px]"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/leads.png?raw=true"
							} // Image for A.N.N.A.
							className="w-80 rounded-lg my-auto mt-32 absolute bottom-80"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/scholaria.jpeg?raw=true"
							} // Image for ScholarIA
							className="w-[250px] rounded-lg -mt-0 ml-0 absolute left-[450px] 2xl:left-[480px] top-5"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/zama_hackathon.png?raw=true"
							} // Image for Neurocrypt
							className="w-72 mt-[300px] rounded-lg -ml-20 absolute -bottom-32 right-[-70px] shadow-lg shadow-pastel-black"
							whileHover={{ scale: 1.25 }}
						/>
					</>
				)}
			</div>
			<div
				className="flex flex-col 
				w-full md:w-2/3 lg:w-3/5 custom-md:w-1/2
				px-8 sm:px-20 md:px-24 2xl:pr-56 pt-28
				text-black"
			>
				<h1 className="text-6xl tracking-[-5px] font-bold">
					<Highlight>Recent Projects</Highlight> I've Worked On
				</h1>
				<p className="mt-4">
					Here are some key projects I've been involved in:
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/DataJurists"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>A.N.N.A. 🔗</Highlight>
					</a>{" "}
					- An AI assistant designed to help developers and
					organizations assess compliance with the EU AI Act. It won
					the 1st Prize and the Most Innovative Solution award at the
					LEADS Innovation Challenge.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/ScholarIA"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>ScholarIA 🔗</Highlight>
					</a>{" "}
					- An all-in-one research assistant for streamlining academic
					work. It provides paper management, personalized
					recommendations, and note-taking functionalities.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/PPAIHACK"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>Neurocrypt 🔗</Highlight>
					</a>{" "}
					- Developed during the Privacy Preserving AI Hackathon, this
					project focused on secure processing of EEG brain wave data
					using Fully Homomorphic Encryption, enabling real-time
					analysis while maintaining data privacy.
				</p>
				{useMediaQuery(767) && (
					<div className="flex flex-row relative">
						<motion.img
							src="/assets/bdma_group.png"
							className="mt-8 w-full max-w-sm rounded-lg shadow-lg"
							alt="BDMA group"
							whileHover={{ scale: 1.1 }}
						/>
						<motion.img
							src={"/assets/scholaria_project.png"} // Image for ScholarIA
							className="w-64 h-64 mt-16 rounded-lg mx-auto flex flex-row absolute right-6"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={"/assets/neurocrypt_project.png"} // Image for Neurocrypt
							className="w-72 mt-32 rounded-lg mx-auto shadow-lg shadow-pastel-black flex flex-row"
							whileHover={{ scale: 1.25 }}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default More;
