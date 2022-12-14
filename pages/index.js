import Layout from '../components/Layout';
import LandingText from '../components/LandingText';
import CardHolder from '../components/CardHolder';

export default function App(props) {
    return (
        <Layout>
            <LandingText />
            <CardHolder holderName="Latest Blogs" {...props} />
        </Layout>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/all');
    const blogs = await res.json();

    return {
        props: {
            blogs: blogs.blogs
        }
    }
}
