import Layout from '../components/Layout';
import LandingText from '../components/LandingText';
import CardHolder from '../components/CardHolder';
import { Pagination } from '@nextui-org/react';
import { useState } from 'react';

export default function App(props) {
    const [page, setPage] = useState(1);
    const contentPerPage = 6;
    return (
        <Layout>
            <LandingText />
            <CardHolder holderName="Latest Blogs" blogs={props.blogs.slice((page - 1) * contentPerPage, page * contentPerPage)} />
            {(Math.ceil(props.total / contentPerPage) > 1) ?
                <Pagination total={Math.ceil(props.total / contentPerPage)} initialPage={page} shadow onChange={(p) => setPage(p)} />
                : null}
        </Layout>
    )
}


export async function getServerSideProps() {
    const blogs = await (await fetch('https://raw.githack.com/bhaskar0120/makeshift-blogs/main/all.json')).json();

    return {
        props: { blogs: blogs.blogs, total: blogs.blogs.length }
    }
}
