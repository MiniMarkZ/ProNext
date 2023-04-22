import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  name: string;
  email: string;
  bio: string;
};

const user: User = {
  name: 'เจษฎาภรณ์ พาณิชพิสิฐ  ',
  email: 's630406260045@email.kmutnb.ac.th',
  bio: 'เขาว่ากัน 101 เทสระบบ'
};

export default (req: NextApiRequest, res: NextApiResponse<User>) => {
  res.status(200).json(user);
};
