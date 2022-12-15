import Layout from '../components/Layout';
import LandingText from '../components/LandingText';
import CardHolder from '../components/CardHolder';
import { Pagination, Container } from '@nextui-org/react';
import { useState } from 'react';

export default function App(props) {
    const [page, setPage] = useState(1);
    const contentPerPage = 6;
    return (
        <Layout>
            <LandingText />
            <CardHolder holderName="Latest Blogs" blogs={props.blogs.slice((page - 1) * contentPerPage, page * contentPerPage)} />
            <Pagination total={Math.ceil(props.total / contentPerPage)} initialPage={page} shadow onChange={(p) => setPage(p)} />
        </Layout>
    )
}


export async function getServerSideProps() {
    const blogs = await (await fetch('http://opendev.vercel.app/api/all')).json();


    return {
        props: { blogs: blogs.blogs, total: blogs.total }
    }
}
