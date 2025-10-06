import { FC } from "react";

import { CONFIG } from "@root/libs/config";
import Status from "@utils/lanyard";
import useMediaQuery from "@utils/useMediaQuery";
import { motion, useAnimation } from "framer-motion";
import Highlight from "@components/Highlight";

export const Hero: FC = () => {
	const date = new Date().getFullYear();

	return (
		<div
			className="w-full mt-24 md:mt-0
                flex flex-row
                bg-white text-center md:text-left"
		>
			{useMediaQuery(768) && <div></div>}
			<div
				className="flex flex-col w-full md:w-4/5 lg:w-1/2
            		px-8 sm:px-20 md:px-24 md:pr-6 2xl:pl-56 pt-16"
			>
				<h1 className="text-6xl tracking-tighter text-black">
					{CONFIG.NAME}
				</h1>
				<p className="mt-6 text-black text-md">
					I'm a {date - CONFIG.BIRTH_YEAR} year old developer and AI
					researcher living
					{!useMediaQuery(980) && <br />}in {CONFIG.LOCATION}.
					<br />
					<br />I recently graduated with{" "}
					<span className="font-bold">Highest Honours</span> from{" "}
					<Highlight>
						CentraleSupélec (Université Paris-Saclay)
					</Highlight>{" "}
					as part of the Erasmus Mundus <Highlight>BDMA</Highlight>{" "}
					program. My thesis received the{" "}
					<Highlight>
						Master Thesis – Industrial Impact Award
					</Highlight>
					.
					<br />
					<br />I also hold degrees in{" "}
					<span className="font-bold">Computer Science</span> and{" "}
					<span className="font-bold">Mathematics</span> from{" "}
					<Highlight>KU Leuven</Highlight>. My research spans{" "}
					<Highlight>AI</Highlight>,{" "}
					<Highlight>diffusion models</Highlight>, and{" "}
					<Highlight>NLP</Highlight>. I have{" "}
					<Highlight>
						over {date - CONFIG.EXPERIENCE_START_YEAR} years
					</Highlight>{" "}
					of experience in CS and math projects.
					<br />
				</p>
			</div>
			{!useMediaQuery(1023) && (
				<div className="flex flex-col w-1/2">
					<motion.div
						className="flex flex-col items-center justify-center mx-auto mr-24 2xl:mr-56"
						whileHover={{ scale: 1.025 }}
					>
						<img
							src={CONFIG.AVATAR_URL}
							alt={CONFIG.NAME}
							className="mx-auto md:h-96 md:w-96 w-full max-w-md object-cover rounded-3xl"
						/>
					</motion.div>
				</div>
			)}
		</div>
	);
};

interface LanguageLinkProps {
	name: string;
	href: string;
	color: string;
}

const LanguageLink = ({ name, href, color }: LanguageLinkProps) => {
	return (
		<span
			className={color + " " + "hover:cursor-pointer"}
			onClick={() => (window.location.href = href)}
		>
			{name}
		</span>
	);
};

export default Hero;
