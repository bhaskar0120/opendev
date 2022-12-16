import { Text, Grid, Image, Card, Container } from "@nextui-org/react";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import style from '../styles/About.module.css';

export default function App() {
    // get width of window
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (

        <Layout>
            <div className={style['center']}>
                {width > 768 ? largeCard() : smallCard()}
            </div>
        </Layout >
    )
}


function largeCard() {
    return (
        <Card variant="shadow" >
            <Container fluid css={{ minHeight: '45vh', linearGradient: ['to top right ', '$gray50', '$blue400'] }}>
                <Card.Body>
                    <Grid.Container >
                        <Grid md={12} lg={4}>
                            <Image css={{ width: '90%', borderRadius: 10 }} src={'https://github.com/bhaskar0120.png'} />
                        </Grid>
                        <Grid md={12} lg={8}>
                            <Container>
                                <Text h1>About Me</Text>
                                <Text css={{ fontWeight: '$semibold' }} size={'$xl'}> Hi,<br />
                                    My name is Bhaskar. I am Junior at Indian Institute of Technology, Varanasi (BHU).
                                    I am a System design enthusiast and a Full Stack Developer.  <br />
                                    Hope you like my blog. <br />
                                </Text>
                            </Container>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Container>
        </Card>
    )

}

function smallCard() {
    return (
        <Container css={{ padding: '$0', margin: '$0' }}>
            <Image css={{ width: '100%', borderRadius: 10 }} src={'https://github.com/bhaskar0120.png'} />
            <div className={style['container-small']} >
                <Text h1>About Me</Text>
                <Text css={{ fontWeight: '$semibold' }} size={'$xl'}> Hi,<br />
                    My name is Bhaskar. I am Junior at Indian Institute of Technology, Varanasi (BHU).
                    I am a System design enthusiast and a Full Stack Developer.  <br />
                    Hope you like my blog. <br />
                </Text>
            </div>
        </Container >

    );
}
