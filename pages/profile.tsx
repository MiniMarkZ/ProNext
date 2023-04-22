import { NextPage, NextPageContext } from 'next';
import styles from '../styles/ProfilePage.module.css'; // Import CSS styles

type User = {
  name: string;
  email: string;
  bio: string;
};

type Hello={
    name: string;
}

type Props = {
  user: User;
  hello: Hello;
};

const ProfilePage: NextPage<Props> = ({ user , hello }) => {
    console.log(hello.name)
  return (
    <div>
      <h1 className={styles.title}>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <p>Hello : {hello.name}</p>  
    </div>
  );
};

ProfilePage.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch('http://localhost:3000/api/profile');
  const user = await res.json();
  const helloRes = await fetch('http://localhost:3000/api/hello');
  const hello = await helloRes.json();
  return { user, hello };
  
};

   
export default ProfilePage;
