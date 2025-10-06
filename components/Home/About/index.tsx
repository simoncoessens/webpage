import Highlight from "@components/Highlight";
import { CONFIG } from "@root/libs/config";
import useMediaQuery from "@utils/useMediaQuery";
import { motion } from "framer-motion";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div
			className="w-full flex flex-col md:flex-row text-center md:text-left"
			id="about"
		>
			<div
				className="w-full custom-md:w-1/2 md:w-4/5 px-8 sm:px-20 md:px-24 md:pr-6 2xl:pl-56 pt-28
          flex flex-col"
			>
				<p className="text-lg tracking-tightest font-bold">
					<Highlight>Computer Science graduate</Highlight>
				</p>
				<h1 className="text-6xl tracking-[-5px] text-black">
					Who am I <Highlight>&amp;</Highlight> how did I get here?
				</h1>
				<div className="mt-4">
					<p className="mt-6 text-black text-md">
						My interest in <Highlight>technology</Highlight> began
						early, leading me to start{" "}
						<Highlight>programming</Highlight> in high school. My
						very first "masterpiece" was a program on a{" "}
						<Highlight>TI-84 calculator</Highlight> to calculate the
						discriminant of a quadratic equation. While it may not
						have been a groundbreaking algorithm, it sparked a
						passion for solving problems through code.
						<br />
						<br />
						However, my interests extended beyond just{" "}
						<Highlight>computer science</Highlight>. I was also
						fascinated by the world of{" "}
						<Highlight>finance</Highlight>, which led me to
						participate in an{" "}
						<Highlight>honours program in finance</Highlight> at the
						<Highlight> University of Antwerp</Highlight> while
						still in high school. This program allowed me to explore
						economic principles and financial markets, expanding my
						knowledge into new areas.
						<br />
						<br />
						After completing high school, I pursued a{" "}
						<Highlight>Bachelor's in Computer Science </Highlight>
						at <Highlight> KU Leuven</Highlight>, eager to dive
						deeper into
						<Highlight> software development</Highlight> and
						<Highlight> algorithmic problem-solving</Highlight>. As
						I progressed, my curiosity grew, leading me to take on a{" "}
						<Highlight>
							supplementary Bachelor's in Mathematics
						</Highlight>
						, where I could delve into the mathematical foundations
						that underpin computer science.
						<br />
						<br />
						Balancing these two fields allowed me to develop a
						versatile skill set, combining theoretical insights with
						practical programming skills. This foundation led me to
						complete the{" "}
						<Highlight>
							Big Data Management and Analytics (BDMA)
						</Highlight>{" "}
						Erasmus Mundus program. My academic journey took me
						across <Highlight>Europe</Highlight>, from
						<Highlight> Université Libre de Bruxelles</Highlight> in
						Belgium to
						<Highlight>
							{" "}
							Universitat Politècnica de Catalunya
						</Highlight>{" "}
						in Spain, and finally to
						<Highlight> CentraleSupélec</Highlight> in Paris, where
						I graduated. I also participated in the{" "}
						<Highlight>eBISS Summer School</Highlight> in Italy,
						furthering my expertise in
						<Highlight> data science</Highlight> and its real-world
						applications.
					</p>
				</div>
			</div>

			{/* Desktop View */}
			{!useMediaQuery(1200) ? (
				<div className="flex flex-col items-center justify-center mx-auto mr-24 2xl:mr-56 pt-0">
					<DesktopCodeComponent
						lang={"python"}
						level={"w-full"}
						logo={"python"}
						ikey={0}
					/>
					<DesktopCodeComponent
						lang={"pytorch"}
						level={"w-2/3"}
						logo={"pytorch"}
						ikey={1}
					/>
					<DesktopCodeComponent
						lang={"r"}
						level={"w-2/3"}
						logo={"r"}
						ikey={2}
					/>
					<DesktopCodeComponent
						lang={"matlab"}
						level={"w-1/2"}
						logo={"matlab"}
						ikey={3}
					/>
					<DesktopCodeComponent
						lang={"javascript"}
						level={"w-1/2"}
						logo={"javascript"}
						ikey={4}
					/>
					{/* Add your image here */}
					<motion.img
						src="https://github.com/simoncoessens/webpage/blob/main/public/assets/bdma_group.png?raw=true"
						className="mt-8 w-full max-w-sm rounded-lg shadow-lg"
						alt="BDMA group"
						whileHover={{ scale: 1.1 }}
					/>
				</div>
			) : null}
		</div>
	);
};

type ICodeComponent = {
	lang: string;
	level: "w-full" | "w-2/3" | "w-1/2" | "w-1/3";
	ikey: number;
	logo: string;
};

const MobileCodeComponent = ({ lang, level, logo, ikey }: ICodeComponent) => {
	let fLevel;
	switch (level) {
		case "w-full":
			fLevel = "100%";
			break;
		case "w-2/3":
			fLevel = "66.6%";
			break;
		case "w-1/2":
			fLevel = "50%";
			break;
		case "w-1/3":
			fLevel = "33.3%";
			break;
		default:
			fLevel = "0%";
	}

	return (
		<motion.div
			className="bg-epic-black-light mx-auto w-4/5 h-16 rounded-lg mt-4 flex flex-row relative"
			whileHover={{ y: -5 }}
		>
			<img
				src={`./assets/langs/${logo}.svg`}
				className="rounded-md h-10 w-10 ml-3 my-auto"
				alt={`${lang} logo`}
			/>
			<p className="text-black flex flex-row my-auto ml-4">
				{lang.charAt(0).toUpperCase() + lang.slice(1)}
			</p>
			<div
				className={`bg-epic-black h-2 ${
					useMediaQuery(550) ? "w-1/4" : "w-60"
				} my-auto flex flex-row rounded-full absolute right-4 top-[44%]`}
			>
				<motion.div
					animate={{ width: fLevel }}
					transition={{ duration: 5 }}
					className="bg-gray rounded-full"
				></motion.div>
			</div>
		</motion.div>
	);
};

const DesktopCodeComponent = ({ lang, level, logo, ikey }: ICodeComponent) => {
	let fLevel;
	switch (level) {
		case "w-full":
			fLevel = "100%";
			break;
		case "w-2/3":
			fLevel = "66.6%";
			break;
		case "w-1/2":
			fLevel = "50%";
			break;
		case "w-1/3":
			fLevel = "33.3%";
			break;
		default:
			fLevel = "0%";
	}

	return (
		<motion.div
			className={`w-[460px] h-16 rounded-lg ${
				ikey !== 0 ? `mt-4` : "mt-28"
			} bg-epic-black-light flex flex-row relative overflow-hidden`}
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={`./assets/langs/${logo}.svg`}
				className="rounded-md h-10 w-10 ml-3 my-auto"
				alt={`${lang} logo`}
			/>
			<p className="text-black mt-[21px] ml-5 flex flex-row">
				{lang.charAt(0).toUpperCase() + lang.slice(1)}
			</p>
			<div className="bg-epic-black h-2 w-60 my-auto flex flex-row rounded-full absolute right-4 top-[44%]">
				<motion.div
					animate={{ width: fLevel }}
					transition={{ duration: 5 }}
					className="bg-gray rounded-full"
				></motion.div>
			</div>
		</motion.div>
	);
};

export default About;
