// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ERROR_CREDENTIALS, ERROR_EMPTY_FIELDS } from '../../../constants';
import prisma from '../../../lib/prisma';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

type Data = {
  name?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { password, email } = req.body

  if (!email || !password) {
    return res.status(406).send({ error: ERROR_EMPTY_FIELDS });
  }

  const User = await prisma.user.findFirst({
    where: {
      email
    },
    select: {
      id: true,
      username: true,
      password: true
    }
  })

  // Check password
  if (User && bcrypt.compareSync(password, User.password)) {
    const token = jwt.sign({ sub: User.id }, 'secret', { expiresIn: '7d' })
    return res.status(200).send({
      id: User.id,
      username: User.username,
      token
    })
  } else {
    return res.status(401).send({ error: ERROR_CREDENTIALS })
  }
}