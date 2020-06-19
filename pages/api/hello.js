// req - request data, res = response data
import { NextApiRequst, NextApiResponse } from 'next'

export default (_: NextApiRequst, res: NextApiResponse) => {
  // ...
  res.status(200).json({ text: 'Hello' })
}
