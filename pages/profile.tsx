import { NextPage, NextPageContext } from 'next';
import styles from '../styles/ProfilePage.module.css'; // Import CSS styles


type User = {
  name: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;

};

type Props = {
  user: User;
};

const ProfilePage: NextPage<Props> = ({ user }) => {
  return (
    <div>
      <div className={styles.background}>
        <h1 className={styles.texttitle}>{user.name}</h1>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br />
        <p >{user.text1}</p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor:"#F1F1F6", borderRadius: '10px', margin:"10px"}}>
        <div className={styles.cardContainer } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={styles.textContainer} style={{ width: '50%', textAlign: 'center', marginLeft: '50px' }}>
          <p className={`${styles.textcard} text-2xl font-bold mb-2`} style={{fontSize:"30px"}}>{user.text2}</p>
          <br />
          <p className={`${styles.textcard} mb-4`}>{user.text3}</p>
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
            src="https://media.discordapp.net/attachments/900255663081545761/1099284431505723423/3f84c768-c2d2-4626-98fe-cd8e9104cf45.jpg?width=577&height=671"
            className={`${styles.cardImage} transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110`} style={{ width: '30%',marginRight: '50px' } }
          />
        </div>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br />
        <p >{user.text4}</p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor:"#F1F1F6", borderRadius: '10px', margin:"10px"}}>
        <div className={styles.cardContainer } style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.18169-9/16807280_1237594613022888_1964372268726998078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGte8NLP0srPPAKKaJ5mVEW7YFHYm-mmA3tgUdib6aYDRVhp5QdtmAW366iQmftlKFUrLSMZygPJWT8BMvNLlD3&_nc_ohc=HVnvQuWww0sAX8tmexn&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDgXIBvUu-kGC7BS768LJyGG5j1eWbZCK2bsAEXPx5AeQ&oe=646E08A1"
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
  const res = await fetch('http://localhost:3000/api/profile');
  const user = await res.json();
  return { user };
};

export default ProfilePage;
