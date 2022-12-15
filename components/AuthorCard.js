import { Image, Container, Card, Text } from '@nextui-org/react';
import style from '../styles/AuthorCard.module.css';

export default function App() {
    const props = {
        headerImgSrc: 'https://picsum.photos/1000/200',
        imgSrc: 'https://avatars.githubusercontent.com/u/51149947?v=4',
        authorName: 'John Doe'
    }
    return (
        <Card variant="shadow" >
            <Image src={props.headerImgSrc} width={"100%"} height={"20vh"} objectFit="cover" />
            <Card.Footer>
                <img src={props.imgSrc} className={style['author-img']} />
                <div className={style.container}>
                    <Text h3>{props.authorName}</Text>
                    <Text color='$gray700'>12 Dec. 2022</Text>
                </div>
            </Card.Footer>
            {/* Random image */}
        </Card>

    );
}