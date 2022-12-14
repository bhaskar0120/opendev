import { Link, Text, Navbar } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function App() {
    let collapseItems = [
        { name: "Home", url: '/' },
        { name: "Courses", url: '/posts/example' },
        { name: "About me", url: "/" }]
    const router = useRouter();

    return (
        <Navbar variant={"floating"} isBordered >
            <Navbar.Brand >
                <Navbar.Toggle showIn={'md'} aria-label='toggle navigation' />
                <Link href='/'>
                    <Text hideIn={'md'} h2 weight={"bold"}> {"<Open"} </Text>
                    <Text hideIn={'md'} h2 weight={"bold"} color={'primary'}> Dev </Text>
                    <Text hideIn={'md'} h2 weight={"bold"}> {"/>"} </Text>
                </Link>
            </Navbar.Brand>
            <Navbar.Content hideIn={"md"} activeColor={"primary"} variant={"highlight-solid-rounded"}>
                <Navbar.Link href="/" isActive={router.pathname === '/'}>Home</Navbar.Link>
                <Navbar.Link href="/posts/example" isActive={router.pathname === '/posts/[PID]'}>Courses</Navbar.Link>
                <Navbar.Link href="/" isActive={router.pathname === '/about'}>About me</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap={10} activeColor={"primary"} variant={"highlight-solid"}>
                <Navbar.Link isActive href="#"><Text size="$xl">Login</Text></Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item.name}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}