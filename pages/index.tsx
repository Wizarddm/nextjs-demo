import { NextPage } from 'next';
import styles from '../styles/index.less';
import { Icon } from 'antd';
import '../styles/size.less'
// import './index.css';
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
  <Icon type="delete" />
  <div className={styles.size}>dddd</div>
  <div className="size">dddd</div>
  </>
);

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

export default Home;