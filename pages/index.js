import Link from 'next/link'
import Layout from '../components/MainLayout'

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="Hello-world" title="Oh Hi There"/>
                <PostLink id="The-next-post" title="The Next Post"/>
                <PostLink id="How-to-fence-posts" title="How to Fence Posts"/>
            </ul>
        </Layout>
    )
}