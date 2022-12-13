import { Text, Card, Button } from "@nextui-org/react";

export default function App(props) {

    return (
        <Card variant="bordered" isHoverable isPressable >
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
                    <Button color={"primary"} auto>Read More</Button>
                </div>
            </Card.Footer>
        </Card>
    );
}