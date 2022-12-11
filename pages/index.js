import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function App() {
    return (
        <div>
            <Navbar />
            <Layout>
                <h1>My App</h1>
            </Layout>
        </div>
    )
}