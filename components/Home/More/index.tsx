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
							className="w-[280px] rounded-lg absolute left-10 top-24 2xl:left-40 2xl:top-40"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/leads.png?raw=true"
							} // Image for A.N.N.A.
							className="w-72 rounded-lg absolute left-6 top-80 2xl:left-24 2xl:top-96"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/scholaria.jpeg?raw=true"
							} // Image for ScholarIA
							className="w-[240px] rounded-lg absolute right-6 top-8 2xl:right-10 2xl:top-16"
							whileHover={{ scale: 1.25 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/zama_hackathon.png?raw=true"
							} // Image for Neurocrypt
							className="w-64 rounded-lg absolute right-6 bottom-10 2xl:right-10 2xl:bottom-20 shadow-lg shadow-pastel-black"
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
						href="https://openreview.net/forum?id=btllSD53lf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>MultiViewPano 🔗</Highlight>
					</a>{" "}
					- Training-free 360° panorama generation from arbitrarily
					posed input images using SEVA multi-view diffusion and a
					pose-aware stitcher. Accepted as an ICCV 2025 spotlight
					talk.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/GaussianDiffusion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>GaussianDiffusion 🔗</Highlight>
					</a>{" "}
					- Research project on image generation using diffusion
					models and 2D Gaussian splatting.
					<br />
					<br />
					<Highlight>A.N.N.A.</Highlight> - An AI assistant designed
					to help developers and organizations assess compliance with
					the EU AI Act. It won the 1st Prize and the Most Innovative
					Solution award at the LEADS Innovation Challenge.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/DataJurists"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>DSA Compliance Tool 🔗</Highlight>
					</a>{" "}
					- Agentic AI system for DSA compliance assessment under
					Prof. Antonio Davola; grew out of A.N.N.A. Leverages
					LangChain and GraphRAG.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/scholaria-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>ScholarIA 🔗</Highlight>
					</a>{" "}
					- An all-in-one research assistant for streamlining academic
					work with paper management, personalized recommendations,
					and note-taking.
					<br />
					<br />
					<a
						href="https://github.com/simoncoessens/PPAIHACK"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Highlight>Neurocrypt 🔗</Highlight>
					</a>{" "}
					- Privacy Preserving AI Hackathon project on secure EEG
					processing with Fully Homomorphic Encryption for real-time
					analysis.
				</p>
				{useMediaQuery(767) && (
					<div className="flex flex-row relative">
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/zama.JPG?raw=true"
							} // Additional image 1
							className="w-[240px] rounded-lg absolute left-6 top-40"
							whileHover={{ scale: 1.15 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/leads.png?raw=true"
							} // Image for A.N.N.A.
							className="w-64 rounded-lg absolute left-8 top-80"
							whileHover={{ scale: 1.15 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/scholaria.jpeg?raw=true"
							} // Image for ScholarIA
							className="w-[200px] rounded-lg absolute right-2 top-4"
							whileHover={{ scale: 1.15 }}
						/>
						<motion.img
							src={
								"https://github.com/simoncoessens/webpage/blob/main/public/assets/zama_hackathon.png?raw=true"
							} // Image for Neurocrypt
							className="w-56 rounded-lg absolute right-2 bottom-4 shadow-lg shadow-pastel-black"
							whileHover={{ scale: 1.15 }}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default More;
