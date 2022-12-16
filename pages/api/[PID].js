export default async function App(req, res) {
    const PID = req.query.PID
    const list = await (await fetch(`https://raw.githack.com/bhaskar0120/makeshift-blogs/main/all.json`)).json()

    // check if the blog exists
    let flag = false
    for (let key in list.blogs) {
        if (list.blogs[key].id == PID) {
            flag = true;
        }
    }
    // if the blog exists return the blog
    if (flag) {
        const response = await (await fetch(`https://raw.githack.com/bhaskar0120/makeshift-blogs/main/blogs/${PID}.json`)).json()
        res.status(200).json(response)
    }
    // if the blog doesn't exist return a 404
    else {
        res.status(404)
    }
}