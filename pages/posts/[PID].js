import { marked } from 'marked';
import { useRouter } from 'next/router';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '../../components/Layout';
import AuthorCard from '../../components/AuthorCard';
import Style from '../../styles/Post.module.css';
import Script from 'next/script';
import { Card } from '@nextui-org/react';


export default function App(props) {

    return (
        <Layout>
            <AuthorCard {...props} />
            <Card css={{ marginTop: '1vh', padding: '$10' }}>
            <div className={Style.markdown} dangerouslySetInnerHTML={{ __html: (props.data) }} />
            <Script onLoad={() => PR.prettyPrint()} src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js" />
            </Card>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const PID = context.query.PID

    const render = {
        code(string) {
            return `
            <div class="code-block">
                <code class="prettyprint">${string}</code>
            </div>`
        },
        codespan(string) {
            return `
            <span class="inline-code">
                <code class="prettyprint">${string}</code>
            </span>`
        },
        table(header, body) {
            return `
            <div>
                <table>
                    <thead>
                        ${header}
                    </thead>
                    <tbody>
                        ${body}
                    </tbody>
                </table>
            </div>`
        },
    }

    const response = await fetch(`https://opendev.vercel.app/api/${PID}`)
    if (response.status == 404) {
        return {
            notFound: true
        }
    }
    let data = await response.json()
    let markdown = data.blog

    marked.use({ renderer: render });
    markdown = markdown.replace(/&/g, "&amp;");
    markdown = markdown.replace(/</g, "&lt;");
    return {
        props: {
            data: DOMPurify.sanitize(marked(markdown)),
            author: data.author,
            date: data.date,
            authorImg: data.authorImg,
            backgroundImg: data.backgroundImg,
        }
    }

}