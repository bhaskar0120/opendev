import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}