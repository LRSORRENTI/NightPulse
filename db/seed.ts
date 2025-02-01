import {  Comment, db } from 'astro:db';


export default async function seed() {
	await db.insert(Comment).values([
		{
			author: "How to use BlockSmith?",
			body: "CEO of BlockSmith"
		},
		{
			author: "What is BlockChain?",
			body: "Fullstack at BlockSmith"
		},
		{
			author: "How to get in Contact?",
			body: "Fullstack at BlockSmith"
		},
		{
			author: "What is the Policy?",
			body: "Fullstack at BlockSmith"
		},
	]);
}
