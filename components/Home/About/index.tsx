import Highlight from "@components/Highlight";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const getAssetPath = (path: string) => `${assetBasePath}${path}`;

export const About: FC = () => {
	const [lightboxMedia, setLightboxMedia] = useState<null | {
		type: "image" | "video";
		src: string;
		alt?: string;
	}>(null);

	return (
		<div
			className="w-full flex flex-col text-center md:text-left"
			id="projects"
		>
			<div
				className="w-full px-8 sm:px-20 md:px-24 2xl:pl-56 pt-28
          flex flex-col"
			>
				<p className="text-lg tracking-tightest font-bold">
					<Highlight>Recent projects</Highlight>
				</p>
				<h1 className="text-6xl tracking-[-5px] text-black">
					What I've been working on
				</h1>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ProjectCard
						title="MultiViewPano: Training‑Free Panorama Generation"
						badge="ICCV 2025 · Spotlight"
						description="Spotlight talk at ICCV 2025 (SP4V workshop). Training‑free 360° panorama generation from arbitrarily posed inputs using SEVA multi‑view diffusion and a pose‑aware stitcher. Ongoing research."
						mediaType="video"
						mediaSrc={getAssetPath("/assets/multiviewpano_video.mp4")}
						mediaAlt="MultiViewPano demo"
						logoSrc={getAssetPath("/assets/amadeus_logo.png")}
						logoAlt="Amadeus logo"
						onOpenMedia={(payload) => setLightboxMedia(payload)}
						links={[
							{
								label: "Workshop (ICCV)",
								href: "https://sp4v.github.io/",
							},
							{
								label: "OpenReview",
								href: "https://openreview.net/forum?id=69OK8v8BSJ&noteId=69OK8v8BSJ",
							},
						]}
					/>
					<ProjectCard
						title="Agentic Video Generation Pipeline (Amadeus)"
						description="Developed an agentic pipeline for video generation during my internship at Amadeus, using LangGraph and experimenting with available video generation models to orchestrate automated script‑to‑video workflows."
						mediaType="video"
						mediaSrc={getAssetPath("/assets/agentic_video_project.mp4")}
						mediaAlt="Agentic video generation pipeline demo"
						logoSrc={getAssetPath("/assets/amadeus_logo.png")}
						logoAlt="Amadeus logo"
						onOpenMedia={(payload) => setLightboxMedia(payload)}
					/>
					<ProjectCard
						title="DSA compliance tool (Agentic AI)"
						description="Prototype agentic copilot for DSA compliance, built with Prof. Antonio Davola and Vittorio Franceze to blend legal expertise with LangChain + GraphRAG automation. On track for a broader launch, with the next milestone being the DSA & Platform Regulation Conference 2026 (University of Amsterdam)."
						mediaType="video"
						mediaSrc={getAssetPath("/assets/dsa_compliance.mp4")}
						mediaAlt="DSA compliance tool demo"
						onOpenMedia={(payload) => setLightboxMedia(payload)}
						links={[
							{
								label: "Context",
								href: "https://www.antoniodavola.com/snip/",
							},
						]}
					/>
					<ProjectCard
						title="GaussianDiffusion: 2D Gaussian Splatting Latent Diffusion"
						description="Diffusion-based image generation operating in a latent space of 2D Gaussian splats. Research project @ CentraleSupélec; presented at JDSE 2025."
						mediaType="video"
						mediaSrc={getAssetPath("/assets/gaussiandiffusion.mp4")}
						mediaAlt="GaussianDiffusion demo"
						logoSrc={getAssetPath("/assets/centralesupelec_logo.png")}
						logoAlt="CentraleSupélec logo"
						onOpenMedia={(payload) => setLightboxMedia(payload)}
						links={[
							{
								label: "GitHub",
								href: "https://github.com/simoncoessens/GaussianDiffusion",
							},
							{
								label: "OpenReview",
								href: "https://openreview.net/forum?id=sbTfxlSHd3&noteId=sbTfxlSHd3",
							},
						]}
					/>
				</div>

				<div className="mt-16">
					<h2 className="text-3xl tracking-tight text-black">
						Other <Highlight>projects</Highlight>
					</h2>
					<p className="mt-4 text-black">
						Here are some key projects I've been involved in:
						<br />
						<br />
						<a
							href="https://revpoints-plus-7kuw.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Highlight>Revolut Revpoints-Plus 🔗</Highlight>
						</a>{" "}
						- Compact proof-of-concept that makes Revolut Points a
						daily habit by recommending vendors where paying with
						points is a no-brainer. Won 3rd place at the UPC x
						Revolut hackathon.
						<br />
						<br />
						<a
							href="https://github.com/simoncoessens/scholaria-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Highlight>ScholarIA 🔗</Highlight>
						</a>{" "}
						- An all-in-one research assistant for streamlining
						academic work with paper management, personalized
						recommendations, and note-taking.
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
						processing with Fully Homomorphic Encryption for
						real-time analysis.
						<br />
						<br />
						<Highlight>A.N.N.A.</Highlight> - An AI assistant
						designed to help developers and organizations assess
						compliance with the EU AI Act. It won the 1st Prize and
						the Most Innovative Solution award at the LEADS
						Innovation Challenge.
					</p>
				</div>
			</div>
			{lightboxMedia ? (
				<Lightbox
					media={lightboxMedia}
					onClose={() => setLightboxMedia(null)}
				/>
			) : null}
		</div>
	);
};

const ProjectCard = ({
	title,
	description,
	links,
	badge,
	mediaType,
	mediaSrc,
	mediaAlt,
	onOpenMedia,
	logoSrc,
	logoAlt,
}: {
	title: string;
	description: string;
	links?: { label: string; href: string }[];
	badge?: string;
	mediaType?: "image" | "video";
	mediaSrc?: string;
	mediaAlt?: string;
	onOpenMedia?: (payload: {
		type: "image" | "video";
		src: string;
		alt?: string;
	}) => void;
	logoSrc?: string;
	logoAlt?: string;
}) => {
	return (
		<motion.div
			className="rounded-2xl bg-epic-black-light p-6 shadow-xl min-h-[520px]"
			whileHover={{ y: -6 }}
		>
			{badge || logoSrc ? (
				<div className="mb-3 flex items-center gap-3">
					{badge ? (
						<span className="inline-flex items-center px-2 py-1 rounded-md bg-pastel-green text-epic-black text-xs font-semibold uppercase tracking-wide">
							{badge}
						</span>
					) : null}
					{logoSrc ? (
						<img
							src={logoSrc}
							alt={logoAlt || `${title} logo`}
							className={`object-contain ml-auto ${
								!badge ? "mt-1" : ""
							}`}
							style={{
								height:
									logoAlt && logoAlt.includes("Centrale")
										? "46px"
										: "24px",
								maxWidth:
									logoAlt && logoAlt.includes("Centrale")
										? "240px"
										: "120px",
							}}
							loading="lazy"
						/>
					) : null}
				</div>
			) : null}
			<button
				className="w-full h-72 md:h-80 bg-white rounded-xl flex items-center justify-center overflow-hidden focus:outline-none"
				type="button"
				onClick={() => {
					if (mediaSrc && mediaType) {
						onOpenMedia?.({
							type: mediaType,
							src: mediaSrc,
							alt: mediaAlt || title,
						});
					}
				}}
				disabled={!mediaSrc}
			>
				{mediaType === "video" && mediaSrc ? (
					<div className="relative w-full h-full bg-white">
						<video
							src={mediaSrc}
							className="w-full h-full rounded-md object-contain bg-white"
							autoPlay
							muted
							loop
							playsInline
						/>
						<span className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-black/70 px-2 py-2 text-white text-sm">
							⤢
						</span>
					</div>
				) : mediaType === "image" && mediaSrc ? (
					<img
						src={mediaSrc}
						alt={mediaAlt || title}
						className="w-full h-full object-cover rounded-md"
					/>
				) : (
					<p className="text-black opacity-70">Media coming soon</p>
				)}
			</button>
			<h3 className="text-2xl text-black mt-4">{title}</h3>
			{description ? (
				<p className="text-black opacity-80 mt-2">{description}</p>
			) : null}
			{Array.isArray(links) && links.length > 0 ? (
				<div className="flex flex-row flex-wrap gap-2 mt-3">
					{links.map((l, idx) => (
						<a
							key={`${l.href}-${idx}`}
							href={l.href}
							target="_blank"
							rel="noopener noreferrer"
							className="px-3 py-1.5 rounded-md bg-gray text-epic-black font-semibold underline underline-offset-4 decoration-2 hover:decoration-4 hover:opacity-100 border border-epic-black transition-transform"
						>
							{l.label} ↗
						</a>
					))}
				</div>
			) : null}
		</motion.div>
	);
};

const Lightbox = ({
	media,
	onClose,
}: {
	media: { type: "image" | "video"; src: string; alt?: string };
	onClose: () => void;
}) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
			<button
				className="absolute inset-0 w-full h-full cursor-default"
				onClick={onClose}
				aria-label="Close media"
			></button>
			<div className="relative z-10 max-w-5xl w-full">
				<button
					className="absolute -top-10 right-0 text-white text-3xl"
					onClick={onClose}
					aria-label="Close media"
				>
					&times;
				</button>
				{media.type === "video" ? (
					<video
						src={media.src}
						className="w-full max-h-[80vh] rounded-2xl bg-white object-contain"
						controls
						autoPlay
						playsInline
					/>
				) : (
					<img
						src={media.src}
						alt={media.alt}
						className="w-full max-h-[80vh] object-contain rounded-2xl"
					/>
				)}
			</div>
		</div>
	);
};

export default About;

