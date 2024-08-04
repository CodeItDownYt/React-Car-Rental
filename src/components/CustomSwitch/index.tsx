interface Props {
	mode: "Monthly" | "Annually";
	setMode: React.Dispatch<React.SetStateAction<"Monthly" | "Annually">>;
}

const CustomSwitch = ({ mode, setMode }: Props) => {
	const handleClick = () => {
		if (mode === "Monthly") {
			setMode("Annually");
		} else {
			setMode("Monthly");
		}
	};
	return (
		<div
			onClick={handleClick}
			className="relative w-[64px] h-[36px] rounded-[80px] bg-[#E8E8E8] border border-[#DFDFDF] cursor-pointer"
		>
			<div
				className={`absolute w-[22px] h-[22px] rounded-full bg-primary top-1/2 -translate-y-1/2 transition-all duration-150 ${
					mode === "Monthly" ? "left-2" : "left-[32px]"
				}`}
			></div>
		</div>
	);
};

export default CustomSwitch;
