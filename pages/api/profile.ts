import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  name: string;
  text1: string;
  text2: string;
};

const user: User = {
  name: 'เด็กคนนี้ชื่อ มาร์ค ครับ',
  text1: 'ชื่อจริง เจษฎาภรณ์ พาณิชพิสิฐ',
  text2: 'เด็กคนนี้อายุตอนนั้น 9 ขวบ ตอนนี้ 21 เเล้วครับ'
};

export default (req: NextApiRequest, res: NextApiResponse<User>) => {
  res.status(200).json(user);
};
