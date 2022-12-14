import { marked } from 'marked';
import { useRouter } from 'next/router';
import DOMPurify from 'isomorphic-dompurify';
import Layout from '../../components/Layout';
import Style from '../../styles/Post.module.css';
import Script from 'next/script';


export default function App(props) {
    const router = useRouter();
    const PID = router.query.PID

    return (
        <Layout>
            <div className={Style.markdown} dangerouslySetInnerHTML={{ __html: (props.data) }} />
            <Script onLoad={() => PR.prettyPrint()} src="https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js" />
        </Layout>
    )
}

export async function getServerSideProps() {
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

    let raw = await fetch('http://localhost:3000/api/example')
    let data = await raw.json()
    let markdown = data.blog

    marked.use({ renderer: render });
    markdown = markdown.replace(/&/g, "&amp;");
    markdown = markdown.replace(/</g, "&lt;");
    return {
        props: {
            data: DOMPurify.sanitize(marked(markdown)),
        }
    }

}