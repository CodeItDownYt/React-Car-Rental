import logo from "../../assets/images/logo.svg";
import bg from "../../assets/images/bg.png";
import { links, selects } from "../../data";

const Header = () => {
	return (
		<div className="w-full lg:h-screen flex flex-col">
			<div className="w-full h-[75px] lg:px-[310px] px-5 flex items-center justify-between">
				<img
					src={logo}
					alt="logo"
				/>
				<div className="hidden lg:flex items-center gap-10">
					{links.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className="text-secondary"
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
			<div
				className="w-full lg:h-[calc(100vh-75px)] bg-center bg-cover flex items-center justify-center flex-col lg:py-0 py-5"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<span className="text-white font-bold lg:text-[63px] text-[52px] lg:text-left text-center">
					Find Your Car & Limousine
				</span>
				<span className="text-white text-[20px] lg:text-left text-center">
					We have many best rental car collections.
				</span>
				<div className="flex flex-col gap-5 lg:px-[310px] pl-5 pr-7 w-full mt-10">
					<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-5 lg:pb-0 pb-5">
						{selects.map((item) => (
							<div
								key={item.title}
								className="flex w-full flex-col gap-2"
							>
								<span className="font-medium text-white">{item.title}</span>
								<div className="relative inline-block w-full">
									<select className="text-disabled w-full h-[60px] outline-none px-3 appearance-none">
										{item.options.map((option, index: number) => (
											<option
												key={index}
												value={option}
												selected={index === 0}
												disabled={index === 0}
											>
												{option}
											</option>
										))}
									</select>
									<img
										src={item.icon}
										alt={item.title}
										className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
									/>
								</div>
							</div>
						))}
					</div>
					<button className="bg-primary w-full h-[60px] text-white font-bold uppercase">
						find your car
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
