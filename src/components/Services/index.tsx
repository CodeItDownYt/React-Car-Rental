import { services } from "../../data";

const Services = () => {
	return (
		<div className="w-full flex lg:flex-row flex-col items-center justify-between lg:h-[350px] lg:py-0 py-16 lg:gap-0 gap-10 bg-[#F5F5F5] lg:px-[310px] px-5 mt-[140px]">
			{services.map((item) => (
				<div
					key={item.title}
					className="flex flex-col lg:items-start items-center"
				>
					<img
						src={item.icon}
						alt={item.title}
						className="w-[45px] h-[36px]"
					/>
					<span className="uppercase font-bold text-secondary mt-2">{item.title}</span>
					<p className="text-description mt-[6px]">{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default Services;
