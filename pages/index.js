import Layout from '../components/Layout';
import LandingText from '../components/LandingText';
import CardHolder from '../components/CardHolder';
import { Pagination, Container } from '@nextui-org/react';
import { useState } from 'react';

export default function App(props) {
    const [page, setPage] = useState(1);
    return (
        <Layout>
            <LandingText />
            <CardHolder holderName="Latest Blogs" blogs={props.blogs.slice((page - 1) * 15, page * 15)} />
            <Pagination total={Math.ceil(props.total / 15)} initialPage={page} shadow onChange={(p) => setPage(p)} />
        </Layout>
    )
}


export async function getServerSideProps() {
    const blogs = await (await fetch('http://localhost:3000/api/all')).json();


    return {
        props: { blogs: blogs.blogs, total: blogs.total }
    }
}
