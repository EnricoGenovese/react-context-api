import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const apiUrl = import.meta.env.VITE_API_URl || "http://localhost:3000";
const endPoint = "/posts/"

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(getData, [id]);

    function getData() {
        axios.get(`${apiUrl}${endPoint}${id}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data.post);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("Done")
            })
    }

    return (
        <section className="container text-center my-4">
            <h1>Post at id {id}</h1>
            {post &&
                <Card key={post.id} data={post} />}
        </section>
    )
}