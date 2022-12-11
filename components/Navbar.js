import { Text, Navbar, Button } from '@nextui-org/react';

export default function App() {
    return (
        <Navbar variant={"floating"} isBordered >
            <Navbar.Brand>
                <Text h2 weight={"bold"}> {"<Open"} </Text>
                <Text h2 weight={"bold"} color={'primary'}> Dev </Text>
                <Text h2 weight={"bold"}> {"/>"} </Text>
            </Navbar.Brand>
            <Navbar.Content activeColor={"primary"} variant={"highlight-solid-rounded"}>
                <Navbar.Link href="#">Home</Navbar.Link>
                <Navbar.Link href="#">Courses</Navbar.Link>
                <Navbar.Link isActive={true} href="#">About me</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content gap={10} activeColor={"primary"} variant={"highlight-solid"}>
                <Navbar.Link isActive href="#"><Text size="$xl">Login</Text></Navbar.Link>
                <Button auto color={"neutral"}>Sign Up</Button>
            </Navbar.Content>
        </Navbar>
    );
}