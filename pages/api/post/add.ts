// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ERROR_EMPTY_FIELDS } from '../../../constants';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { title, content } = req.body

  if (!title || !content) {
    return res.status(406).send({ error: ERROR_EMPTY_FIELDS });
  }

  const result = await prisma.post.create({
    data: {
      title,
      content
    }
  })

  return res.status(200).send(result)
}