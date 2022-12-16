import { Image, Avatar, Spacer, Card, Text } from '@nextui-org/react';
import style from '../styles/AuthorCard.module.css';

export default function App(props) {
    return (
        <Card variant="shadow" >
            <Image src={props.backgroundImg} width={"100%"} height={"20vh"} objectFit="cover" />
            <Card.Footer>

                <Avatar src={props.authorImg} size={'xl'} />
                <Spacer></Spacer>
                <div className={style.container}>
                    <Text h3>{props.author}</Text>
                    <Text color='$gray700'>{props.date}</Text>
                </div>
            </Card.Footer>
            {/* Random image */}
        </Card>

    );
}