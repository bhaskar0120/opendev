import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import LandingText from '../components/LandingText';
import CardHolder from '../components/CardHolder';

export default function App(props) {
    console.log("Props are", props)
    return (
        <div>
            <Navbar />
            <Layout>
                <LandingText />
                <CardHolder holderName="Latest Blogs" {...props} />
            </Layout>
        </div>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/all');
    const blogs = await res.json();

    return {
        props: {
            blogs: blogs.Blogs
        }
    }
}
