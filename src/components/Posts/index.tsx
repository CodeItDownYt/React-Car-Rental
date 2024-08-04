import { posts } from "../../data";

const Posts = () => {
	return (
		<div className="w-full flex flex-col gap-8 lg:px-[310px] px-5 mt-[140px] items-center justify-center">
			<span className="text-title lg:text-[48px] text-[35px] font-bold uppercase text-center">
				Our Recent Posts
			</span>
			<div className="w-full flex lg:flex-row flex-col items-center justify-center gap-5">
				{posts.map((item) => (
					<div
						key={item.title}
						className="w-full flex flex-col"
					>
						<img
							src={item.image}
							alt={item.title}
						/>
						<span className="text-description mt-3">{item.date}</span>
						<span className="text-title font-bold text-[26px] max-w-[95%] mt-1">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
