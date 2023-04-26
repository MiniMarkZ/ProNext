import { NextPage, NextPageContext } from 'next';
import styles from '../styles/ProfilePage.module.css'; // Import CSS styles


type User = {
  text: string;
};
type Img = {
  img: string;
}
type Study = {
  study: string;
}

type Props = {
  user: User;
  img : Img
  study: Study;
};

const ProfilePage: NextPage<Props> = ({ user,study,img }) => {
  console.log(user);
  console.log("asd",study);
  console.log("img",img);
  return (
    <div>
      <div className={styles.background}>
        <h1 className={styles.texttitle}>เด็กคนนี้ชื่อ มาร์ค ครับ</h1>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br />
        <p >เด็กคนนี้อายุตอนนั้น 9 ขวบ ตอนนี้ 21 เเล้วครับ</p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor:"#F1F1F6", borderRadius: '10px', margin:"10px"}}>
        <div className={styles.cardContainer } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={styles.textContainer} style={{ width: '50%', textAlign: 'center', marginLeft: '50px' }}>
          <p className={`${styles.textcard} text-2xl font-bold mb-2`} style={{fontSize:"30px"}}>นาย {user[0][4]} {user[0][5]} ชื่อเล่น {user[0][6]} ครับ</p>
          <br />
          <p className={`${styles.textcard} mb-4`}>{user[0][2]}{user[0][3]}</p>
          <br />
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'  }}>
            <a href="https://github.com/MiniMarkZ">
              <img src="https://media.discordapp.net/attachments/900255663081545761/1100038234995699832/github.png?width=936&height=936" style={{ width: '32px', height: '32px', marginBottom: '8px' }} />
            </a>
            <a href="https://www.facebook.com/markmaza74">
              <img src="https://media.discordapp.net/attachments/900255663081545761/1100038235213807660/facebook.png?width=936&height=936" style={{ width: '32px', height: '32px', marginBottom: '8px' }} />
            </a>
            <a href="https://www.instagram.com/markjedsada/">
              <img src="https://media.discordapp.net/attachments/900255663081545761/1100038235436089344/instagram.png?width=936&height=936" style={{ width: '32px', height: '32px', marginBottom: '8px' }} />
            </a>
          </div>
        </div>
          <img
            src={img[0][2]}
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%',marginRight: '50px' } }
          />
        </div>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br />
        <p >ประวัติการศึกษาก็...</p>
      </div>
      <br></br>
      <br></br>
      <div style={{backgroundColor:"#F1F1F6", borderRadius: '10px', margin:"10px"}}>
        <div className={styles.cardContainer } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img
            src={img[1][2]}
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%',marginLeft: '50px' } }
          />
        <div className={styles.textContainer} style={{ width: '50%', textAlign: 'center', marginRight: '50px' }}>
          <p className={`${styles.textcard} mb-4`}>มัญยมศึกษาตอนต้น :  {study[0][1]}</p>
          <p className={`${styles.textcard} mb-4`}>มัญยมศึกษาตอนปลาย : {study[0][1]}</p>
          <p className={`${styles.textcard} mb-4`}>กำลังศึกษาปริญญาตรี :{study[1][1]}</p>
          <br />
        </div>
          
        </div>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br />
        <p >รูปเก่าๆ (เป็นคนรูปน้อยครับ)</p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor:"#F1F1F6", borderRadius: '10px', margin:"10px"}}>
        <div className={styles.cardContainer } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src= {img[2][2]}
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%'} }
          />
          <img
            src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/47208570_1955100654605610_8500001928191672320_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-Jwnbkdo8nYzg2bIT0Bo-CVzjYha0Ui0JXONiFrRSLfmtIOq7zVTmlZe0NPDlIhsyutFB5ek7BVndULXdD9jT&_nc_ohc=kNt4y-S7ScQAX_K-GkI&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfCaOCWOpBZwoSuL29VLzBm3RdakkwO8p5Ii_gmd24hUuA&oe=646E05EE"
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%',} }
          />
          <img
            src="https://media.discordapp.net/attachments/900255663081545761/1100045610515710032/2566-04-24_20.08.13.png?width=936&height=934"
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%',} }
          />
          

        </div>
      </div>

    </div>
  );
};

ProfilePage.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch('http://localhost:8080/profile');
  const user = await res.json();
  const resstudy = await fetch('http://localhost:8080/study');
  const study = await resstudy.json();
  const resimg =  await fetch('http://localhost:8080/img');
  const img = await resimg.json();
  return { user , study , img};
};

export default ProfilePage;
