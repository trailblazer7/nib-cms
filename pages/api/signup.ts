// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string;
    error?: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { username, email, password } = req.body

    if ( !username|| !email || !password ) {
        res.status(406).send({ error: 'Please fill all fields.' })
    } else {
        res.status(200).json({
            a: 'test',
            b: 'test2'
        })
    }
}