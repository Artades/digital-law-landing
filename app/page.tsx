"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
	const [clicked, setClicked] = useState<boolean>(false);
	const { toast } = useToast();
	const downloadFile = () => {
		setClicked(true);

		const intervalId = setInterval(() => {
			setClicked(false);
			clearInterval(intervalId);
		}, 8000);
		const anchor = document.createElement("a");
		anchor.href = "/docs/law.pptx"; // Set the file URL
		anchor.download = "law.pptx"; // Set the desired file name
		anchor.click(); // Simulate a click to trigger the download
		clearInterval(100);
	};
	return (
		<div className='w-full min-h-screen overflow-hidden relative bg-[url("/dl-main-bg.jpg")] bg-no-repeat bg-cover bg-bottom lg:bg-cover lg:bg-left  lg:bg-left-top backdrop-brightness-50 bg-black/30'>
			<Toaster />
			<div className="w-screen min-h-screen backdrop-brightness-50 bg-black/60">
				<div className="w-full h-screen flex justify-center md:justify-end lg:justify-end items-center md:pr-20 p-5 lg:pr-30">
					<div className="w-full flex flex-col lg:items-end md:items-end items-center justify-center gap-y-10">
						<h1 className="w-full  lg:max-w-[70%] lg:text-end text-center  lg:text-7xl text-4xl  font-extrabold text-white">
							The best tool to be <br />
							<span className="text-green-500">
								<Typewriter
									options={{
										strings: [
											// "Privacy Conscious",
											// "Digitally Empowered",
											"Cyber Savvy",
											"Tech-Wise",
											"Info-Adept",
										],
										autoStart: true,
										loop: true,
									}}
								/>
							</span>
						</h1>
						<p className="leading-8 max-w-full lg:max-w-[40%]  text-center text-muted-foreground/50 lg:text-end md:text-end md:text-xl text-lg lg:text-2xl">
							Explore the optimal way to enhance your digital literacy.
						</p>
						<div className="flex items-center gap-5">
						<Link href={"/law"}>
            
            	<Button variant={"default"} size={"lg"} className="rounded-[5px]">
								Read
							</Button>
              </Link>
							<Button
								size={"lg"}
								variant={"outline"}
								className={cn(
									"rounded-[5px]",
									`${clicked ? "shadow-lg shadow-green-500" : null}`
								)}
								onClick={() => {
									downloadFile();
									toast({
										title: "File has been downloaded !",
										description: "Thank you for using our services.",
									});
								}}
							>
								{clicked ? "Downloaded 😇" : "Download [RU]"}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
