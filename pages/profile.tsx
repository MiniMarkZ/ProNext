import { NextPage, NextPageContext } from 'next';
import styles from '../styles/ProfilePage.module.css'; // Import CSS styles

type User = {
  name: string;
  text1: string;
  text2: string;
};

type Props = {
  user: User;
};

const ProfilePage: NextPage<Props> = ({ user }) => {
  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles.texttitle}>{user.name}</h1>
      </div>
      <div className={styles.text} style={{ textAlign: 'center' }}>
        <br></br>
        <p>{user.text1}</p>
        <p>{user.text2}</p>
      </div>
      <br></br>
      <div className={styles.cardContainer}>
        <img
          src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/97395343_2918033868312279_7099698996054065152_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpAG0waTDNMnvypRs4dtR096mPgjbsgxP3qY-CNuyDEydQ44GVYMjln8woKzrtmpHYrcxXpEpfHsYKHEHVzYnD&_nc_ohc=PT446LqWt3UAX9-gYm_&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDZAKwXk894W3Ih6-NXa6QzNgfDtWDie5jYQV4NkM-mNg&oe=646B1061"
          className={styles.cardImage}
        />
        <img
          src="https://media.discordapp.net/attachments/900255663081545761/1099284431505723423/3f84c768-c2d2-4626-98fe-cd8e9104cf45.jpg?width=577&height=671"
          className={styles.cardImage}
        />
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
