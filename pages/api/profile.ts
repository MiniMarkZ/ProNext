import { NextApiRequest, NextApiResponse } from 'next';


type User = {
  name: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

const user: User = {
  name: 'เด็กคนนี้ชื่อ มาร์ค ครับ',
  text1: 'เด็กคนนี้อายุตอนนั้น 9 ขวบ ตอนนี้ 21 เเล้วครับ',
  text2: 'ชื่อ เจษฎาภรณ์ พาณิชพิสิฐ ชื่อเล่น มาร์ค ครับ ',
  text3: 'เกิดวันที่ 11 มิถุนายน พ.ศ 2544 เป็นนักศึกษาชั้นปีที่ 4 สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ประยุกต์ พระจอมเกล้าพระนครเหนือ \nสิ่งที่ชอบทำคือ อยู่กับตัวเอง และ เล่นเกม ครับ',
  text4: 'ปกติเป็นคนที่ถ่ายรูปน้อยมากครับ'
};

export default (req: NextApiRequest, res: NextApiResponse<User>) => {
  res.status(200).json(user);
};
