import { useState } from "react";
import { plans } from "../../data";
import CustomSwitch from "../CustomSwitch";

const Plans = () => {
	const [mode, setMode] = useState<"Monthly" | "Annually">("Monthly");
	return (
		<div className="w-full flex flex-col items-center justify-center gap-9 lg:px-[310px] px-5 mt-[140px]">
			<div className="text-title lg:text-[46px] text-[35px] font-bold uppercase text-center">
				Save by choosing best plan
			</div>
			<div className="flex items-center gap-5">
				<span
					className="text-description cursor-pointer"
					onClick={() => setMode("Monthly")}
				>
					Monthly
				</span>
				<CustomSwitch
					mode={mode}
					setMode={setMode}
				/>
				<span
					className="text-description cursor-pointer"
					onClick={() => setMode("Annually")}
				>
					Annually
				</span>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-5">
				{plans.map((item) => (
					<div
						key={item.title}
						className="w-full bg-[#F5F5F5] border border-[#E4E4E4] rounded-[10px] py-[60px] lg:px-[120px] px-8 h-[610px] flex flex-col items-center justify-between"
					>
						<div className="flex flex-col gap-7">
							<div className="flex flex-col gap-2">
								<span
									className={`uppercase font-bold text-center ${
										item.title === "recommended" ? "text-primary" : "text-secondary"
									}`}
								>
									{item.title}
								</span>
								<span className="font-bold text-title text-[46px] text-center">
									{item.price}
								</span>
							</div>
							<div className="flex flex-col gap-3">
								{item.services.map((service, index: number) => (
									<div
										key={index}
										className="text-description text-center"
									>
										{service}
									</div>
								))}
							</div>
						</div>
						<button
							className={`${
								item.title === "recommended" ? "bg-primary" : "bg-title"
							} w-full h-[60px] text-white font-bold uppercase`}
						>
							Choose Plan
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Plans;
