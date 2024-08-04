import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import t4 from "../assets/images/t4.png";
import t5 from "../assets/images/t5.png";
import t6 from "../assets/images/t6.png";
import t7 from "../assets/images/t7.png";
import t8 from "../assets/images/t8.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import s1 from "../assets/images/car.svg";
import s2 from "../assets/images/save.svg";
import s3 from "../assets/images/money.svg";
import s4 from "../assets/images/cha.svg";
import vt from "../assets/images/vt.svg";
import loc from "../assets/images/loc.svg";
import date from "../assets/images/date.svg";

export const steps = [
	{
		id: "01",
		title: "Choose A Vehicle",
		description: "Sed euismod mauris corper libero.",
	},
	{
		id: "02",
		title: "Pick Location & Date",
		description: "Nisi maecenas fermentum neque.",
	},
	{
		id: "03",
		title: "Book Your Car",
		description: "Mauris corper accumsan urna sed.",
	},
	{
		id: "04",
		title: "Finish Process",
		description: "Orci duis ut lectus metus nam sette.",
	},
];

export const brands = [
	{ title: "HYUNDAI", image: c1 },
	{ title: "JEEP", image: c2 },
	{ title: "BMW", image: c3 },
	{ title: "JEEP", image: c4 },
	{ title: "FORD", image: c5 },
	{ title: "RANGE ROVER", image: c6 },
];

export const types = [
	{ title: "JEEP", price: "$29", image: t1 },
	{ title: "MERCEDES", price: "$29", image: t2 },
	{ title: "BMW", price: "$29", image: t3 },
	{ title: "HYUNDAI", price: "$29", image: t4 },
	{ title: "MERCEDES", price: "$29", image: t5 },
	{ title: "FORD", price: "$29", image: t6 },
	{ title: "FORD", price: "$29", image: t7 },
	{ title: "BMW", price: "$29", image: t8 },
];

export const plans = [
	{
		title: "essential",
		price: "$29.50",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Velit mir",
			"✓ Elit mir ivamus",
		],
	},
	{
		title: "recommended",
		price: "$44.40",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Elit mir ivamus",
			"✓ Lorem ipsum dolor",
			"✓ Ipsum dolor",
		],
	},
	{
		title: "pro",
		price: "$70.50",
		services: [
			"✓ Quisque rhoncus",
			"✓ Lorem ipsum dolor",
			"✓ Vivamus velit mir",
			"✓ Velit mir",
			"✓ Elit mir ivamus",
			"✓ Quisque rhoncus",
			"✓ Vivamus velit mir",
		],
	},
];

export const posts = [
	{ title: "Safest car rental services in 2024", date: "Feb 22,2024 / Tips", image: p1 },
	{ title: "Best car collection in the world", date: "Feb 22,2024 / Tips", image: p2 },
	{ title: "Which car is the best for travel", date: "Feb 22,2024 / Tips", image: p3 },
];

export const services = [
	{ title: "Different cars", description: "Sed euismod mauris corper libero.", icon: s1 },
	{ title: "Easy Booking", description: "Nisi maecenas fermentum neque.", icon: s2 },
	{ title: "100% best rate", description: "Mauris corper accumsan urna sed.", icon: s3 },
	{ title: "customer support", description: "Orci duis ut lectus metus nam sette.", icon: s4 },
];

export const links = [
	{ title: "Home", path: "/" },
	{ title: "Booking", path: "/" },
	{ title: "About", path: "/" },
	{ title: "Cars", path: "/" },
	{ title: "Blog", path: "/" },
	{ title: "Contact", path: "/" },
];

export const selects = [
	{ title: "Vehicle Type", icon: vt, options: ["Select Car Group", "Car", "SUV", "Truck"] },
	{
		title: "Picking Up Location",
		icon: loc,
		options: ["Airport Or Anywhere", "Airport", "Home", "Work"],
	},
	{
		title: "Picking Up Date",
		icon: date,
		options: ["Today", "Tommorow", "Next Week"],
	},
	{
		title: "Returning Date",
		icon: date,
		options: ["Tommorow", "Today", "Next Week"],
	},
];
