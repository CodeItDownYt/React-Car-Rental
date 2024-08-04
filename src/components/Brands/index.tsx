import { brands } from "../../data";

const Brands = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center gap-8 lg:px-[310px] px-5 mt-[140px]">
			<span className="text-title lg:text-[48px] text-[35px] font-bold text-center">
				Great Cars Rental & Limousine Services
			</span>
			<div className="w-full flex items-center gap-5 flex-wrap">
				{brands.map((item, index: number) => (
					<div
						key={index}
						className="flex flex-col gap-1 items-center lg:w-auto w-full"
					>
						<img
							src={item.image}
							alt={item.title}
							className="w-full"
						/>
						<span className="font-bold text-title text-[26px]">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Brands;
