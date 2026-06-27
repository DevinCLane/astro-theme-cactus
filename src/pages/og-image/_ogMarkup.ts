import { html } from "satori-html";
import { siteConfig } from "@/site.config";

const ogColors = {
	bg: "#f9f6fd",
	text: "#0c090c",
	link: "#f774a2",
} as const;

// OG image markup, use https://og-playground.vercel.app/ to design your own.
export const ogMarkup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[${ogColors.bg}] text-[${ogColors.text}]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-[${ogColors.text}]">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t-2 border-[${ogColors.link}] text-[${ogColors.text}]">
			<p tw="text-2xl ml-3 font-semibold">${siteConfig.title}</p>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;
