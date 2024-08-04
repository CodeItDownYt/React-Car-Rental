import { steps } from "../../data";

const Steps = () => {
	return (
		<div className="w-full flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-8 lg:px-[310px] px-5 mt-[40px]">
			{steps.map((item) => (
				<div
					key={item.id}
					className="flex flex-col lg:items-start items-center"
				>
					<span className="text-placeholder font-bold italic text-[44px]">{item.id}</span>
					<span className="text-secondary font-bold">{item.title}</span>
					<span className="text-description mt-1">{item.description}</span>
				</div>
			))}
		</div>
	);
};

export default Steps;
