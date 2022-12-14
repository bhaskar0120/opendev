import { Text, Card, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function App(props) {
    const [onCard, setOnCard] = useState(false);

    return (
        <Card variant="bordered" isHoverable
            onMouseEnter={() => setOnCard(true)}
            onMouseLeave={() => setOnCard(false)}>
            <Card.Header>
                <Text h3>{props.title}</Text>
            </Card.Header>
            <Card.Divider css={{ backgroundColor: "$gray200" }} />
            <Card.Body>
                <Text size={18} weight={500}>{props.content}</Text>
            </Card.Body>
            <Card.Footer>
                <div style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                }}>
                    <Text color="$gray600">{props.author}</Text>
                    <Link href={'/posts/example'}><Button shadow={onCard} color={"primary"} auto>Read More</Button></Link>
                </div>
            </Card.Footer>
        </Card>
    );
}