import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; // Removed HiOutlineHeart import
import { motion } from "framer-motion";

export const Footer: FC = () => {
	return (
		<div className="bg-white w-full h-24 mt-24 flex flex-row text-black">
			<div className="flex flex-row h-full w-full">
				<div className="mx-auto my-auto text-2xl flex flex-row">
					<motion.div
						onClick={() => {
							window.location.href =
								"https://github.com/simoncoessens";
						}}
						whileHover={{ y: -5 }}
						className="transition-colors ease-in-out hover:text-pastel-green"
					>
						<AiFillGithub className="flex flex-row mr-6 hover:cursor-pointer" />
					</motion.div>
					<motion.div
						onClick={() => {
							window.location.href =
								"https://www.linkedin.com/in/simon-coessens";
						}}
						whileHover={{ y: -5 }}
						className="transition-colors ease-in-out hover:text-pastel-green"
					>
						<AiFillLinkedin className="flex flex-row ml-6 hover:cursor-pointer" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
