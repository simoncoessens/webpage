import { motion } from "framer-motion";
import { FC, useState } from "react";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const getAssetPath = (path: string) => `${assetBasePath}${path}`;

const pictures = [
	getAssetPath("/assets/zama.JPG"),
	getAssetPath("/assets/zama_2.JPG"),
	getAssetPath("/assets/leads.png"),
	getAssetPath("/assets/iccv_presentation.jpg"),
	getAssetPath("/assets/master_thesis.jpeg"),
	getAssetPath("/assets/scholaria.jpeg"),
	getAssetPath("/assets/zama_hackathon.png"),
	getAssetPath("/assets/bdma_group.JPG"),
	getAssetPath("/assets/upcxrevolut.jpeg"),
];

export const More: FC = () => {
	const [selectedImage, setSelectedImage] = useState<null | string>(null);

	return (
		<div className="w-full flex flex-col items-center text-center mt-24 px-8 sm:px-20 md:px-24 2xl:px-56">
			<h1 className="text-6xl tracking-[-5px] font-bold text-black">
				Some pictures
			</h1>
			<div className="mt-16 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{pictures.map((src, idx) => (
					<motion.div
						key={`${src}-${idx}`}
						className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
						whileHover={{ scale: 1.02 }}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 20,
						}}
					>
						<img
							src={src}
							alt={`Gallery ${idx + 1}`}
							className="h-80 w-full rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
							onClick={() => setSelectedImage(src)}
						/>
					</motion.div>
				))}
			</div>
			{selectedImage ? (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
					<button
						className="absolute inset-0 w-full h-full cursor-default"
						onClick={() => setSelectedImage(null)}
						aria-label="Close image"
					></button>
					<div className="relative z-10 max-w-5xl w-full">
						<button
							className="absolute -top-10 right-0 text-white text-3xl"
							onClick={() => setSelectedImage(null)}
							aria-label="Close image"
						>
							&times;
						</button>
						<img
							src={selectedImage}
							alt="Expanded gallery"
							className="w-full max-h-[80vh] object-contain rounded-2xl"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default More;

