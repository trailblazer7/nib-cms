// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma';
const bcrypt = require('bcrypt')

type Data = {
	name?: string;
	error?: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { password, username, email } = req.body

	if (!username || !email || !password) {
		return res.status(406).send({ error: 'Please fill all fields.' });
	}

	const existedUser = await prisma.user.findFirst({
		where: {OR: [{username},{email}]},
		select: {
			username: true
		}
	})

	if (existedUser) {
		return res.status(406).json({ error: `User with the username or email already exists.` })
	}

	try {
		await prisma.user.create({
			data: {
				username,
				email,
				password: bcrypt.hashSync(password, 10)
			}
		})
	} catch (error) {
		return res.status(500).json({ error: `DB error while creating user: ${error}`  })
	}

	res.status(200).json({})
}