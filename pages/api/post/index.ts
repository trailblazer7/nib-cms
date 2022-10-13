// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ERROR_EMPTY_FIELDS } from '../../../constants';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = await prisma.post.findMany()

  return res.status(200).send(result)
}