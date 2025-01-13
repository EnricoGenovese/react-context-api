import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

import Card from "../components/Card";

export default function HomePage() {

    const { posts } = useContext(DataContext)

    return (
        <section className="container text-center my-4">
            <h1>Home Page</h1>
            <div className="row gy-4">
                {posts.map((post) => (
                    <div className="col-12 col-md-6 col-lg-4"
                        key={post.id}>
                        <Card
                            data={post}
                            onDelete={() => deletePost(post.id)} />
                    </div>
                ))

                }
            </div>
        </section>
    )
}