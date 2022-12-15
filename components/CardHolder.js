import { Text, Grid, } from "@nextui-org/react"
import BlogCard from "./BlogCard"
import style from '../styles/CardHolder.module.css'

function App(props) {
    return (
        <div className={style.container}>
            <Text h1>{props.holderName}</Text>
            <Grid.Container gap={3}>
                {props.blogs.map((blog) => {
                    return (
                        <Grid xs={4}>
                            <BlogCard {...blog} />
                        </Grid>
                    )
                })
                }
            </Grid.Container>
        </div>
    )
}
export default App;