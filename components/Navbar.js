import { Link, Text, Navbar, Popover } from '@nextui-org/react';
import { useRouter } from 'next/router';

export default function App() {
    let collapseItems = [
        { name: "Home", url: '/' },
        //{ name: "Courses", url: '/posts/example' },
        { name: "About me", url: "/about" }]
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
                <Navbar.Link href="/" isActive={router.pathname === '/' || router.pathname === '/posts/[PID]'}>Home</Navbar.Link>
                {/*<Navbar.Link href="" isActive={router.pathname === '/posts/[PID]'}>Courses</Navbar.Link>*/}
                <Navbar.Link href="/about" isActive={router.pathname === '/about'}>About me</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap={10} activeColor={"primary"} variant={"highlight-solid"}>
                <Popover>
                    <Popover.Trigger>
                        <Navbar.Link isActive ><Text size="$xl">Login</Text></Navbar.Link>
                    </Popover.Trigger>
                    <Popover.Content css={{ p: '$10' }}>
                        This Feature will be added soon!
                    </Popover.Content>
                </Popover>
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