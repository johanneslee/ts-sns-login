import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/nextauth"
import { NextApiRequest, NextApiResponse } from "next"

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}