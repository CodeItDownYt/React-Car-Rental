import logoWhite from "../../assets/images/logowhite.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import ig from "../../assets/images/ig.svg";
import linkedin from "../../assets/images/linkedin.svg";
import youtube from "../../assets/images/youtube.svg";
import loc from "../../assets/images/footer-loc.svg";
import call from "../../assets/images/call.svg";
import time from "../../assets/images/time.svg";
import { links } from "../../data";

const Footer = () => {
	return (
		<div className="w-full flex flex-col bg-title">
			<div className="w-full lg:h-[450px] flex lg:flex-row flex-col lg:py-0 py-10 lg:gap-0 gap-16 lg:items-center justify-between lg:px-[310px] px-5">
				<div className="flex flex-col gap-4">
					<img
						src={logoWhite}
						alt="logo"
						className="w-[40%]"
					/>
					<p className="text-white max-w-[420px]">
						Vel non nibh vestibulum massa ullam corper bib endum ultrices venenatis, id id sed
						mass.
					</p>
					<div className="flex items-center gap-6 mt-5">
						<img
							src={facebook}
							alt="facebook"
							className="cursor-pointer"
						/>
						<img
							src={twitter}
							alt="twitter"
							className="cursor-pointer"
						/>
						<img
							src={ig}
							alt="ig"
							className="cursor-pointer"
						/>
						<img
							src={linkedin}
							alt="linkedin"
							className="cursor-pointer"
						/>
						<img
							src={youtube}
							alt="youtube"
							className="cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<span className="uppercase text-white font-bold text-[26px]">contact info</span>
					<div className="flex flex-col gap-5">
						<div className="flex items-center gap-2">
							<img
								src={loc}
								alt="location"
							/>
							<span className="text-white">State Road 54 Trinity, Florida</span>
						</div>
						<div className="flex items-center gap-2">
							<img
								src={call}
								alt="phone"
							/>
							<span className="text-white">Call: 666 333 9999</span>
						</div>
						<div className="flex items-center gap-2">
							<img
								src={time}
								alt="working-hours"
							/>
							<span className="text-white">8:00-18:00, Sat: Closed</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-[26px]">
					<span className="text-white uppercase font-bold text-[26px]">
						Subscribe our Newsletter
					</span>
					<p className="text-white max-w-[420px]">
						Vel non nibh vestibulum massa ullam corper bib endum ultrices venenatis, id id sed
						mass.
					</p>
					<div className="flex items-center justify-between border-b border-white pb-3">
						<input
							type="text"
							className="outline-none border-none bg-transparent text-white placeholder:text-white"
							placeholder="Your email address"
						/>
						<span className="text-white cursor-pointer uppercase font-bold">Subscribe</span>
					</div>
				</div>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:py-0 py-5 lg:h-[80px] border-t border-[#5F5F5F] lg:px-[310px] px-5">
				<span className="text-white font-medium">
					© Limo, All rights reserved - Developed by{" "}
					<a
						href="https://www.youtube.com/channel/UCCW0Rmnu7AocSIcc0PUMH0Q"
						target="_blank"
						className="underline"
					>
						CodeItDown
					</a>
				</span>
				<div className="hidden lg:flex items-center gap-7">
					{links.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-white"
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
