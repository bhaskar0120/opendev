import { Link, Text, Navbar } from '@nextui-org/react';

export default function App() {
    let collapseItems = ["Home", "Courses", "About me"]
    return (
        <Navbar variant={"floating"} isBordered >
            <Navbar.Brand>
                <Navbar.Toggle showIn={'md'} aria-label='toggle navigation' />
                <Text hideIn={'md'} h2 weight={"bold"}> {"<Open"} </Text>
                <Text hideIn={'md'} h2 weight={"bold"} color={'primary'}> Dev </Text>
                <Text hideIn={'md'} h2 weight={"bold"}> {"/>"} </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn={"md"} activeColor={"primary"} variant={"highlight-solid-rounded"}>
                <Navbar.Link href="#">Home</Navbar.Link>
                <Navbar.Link href="#">Courses</Navbar.Link>
                <Navbar.Link isActive={true} href="#">About me</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap={10} activeColor={"primary"} variant={"highlight-solid"}>
                <Navbar.Link isActive href="#"><Text size="$xl">Login</Text></Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}