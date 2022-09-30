// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string;
    error?: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { firstName, lastName, emailAddress, password, confirmPassword } = req.body

    if ( !firstName || !lastName || !emailAddress || !password || !confirmPassword ) {
        res.status(406).send({ error: 'Please fill all fields.' })
    } else {
        res.redirect(307, '/')
    }
}