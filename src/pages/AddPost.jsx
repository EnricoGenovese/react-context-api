import { useState } from "react";
import axios from "axios";

import { tags } from "../data/tags";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
const postsEndPoint = "/posts/";

export default function AddPost() {

    const newPost = {
        title: "",
        content: "",
        img: "",
        tags: "",
    }

    const [formData, setFormData] = useState(newPost)

    function handleInput(event) {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value })
    }

    function handleTags(e) {
        setFormData((formData) => {
            let { tags, ...others } = formData;
            tags.includes(e.target.value) ?
                tags = tags.filter((val) => val !== e.target.value) :
                tags = [...tags, e.target.value];
            return {
                tags,
                ...others,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post(apiUrl + postsEndPoint, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setFormData(newPost);
            })
    }

    return (
        <>
            <section className="container form row" onSubmit={handleSubmit}>
                <h2>Inserisci un nuovo post</h2>
                <form className="col-12">
                    <label htmlFor="title">Titolo del post</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="title"
                        aria-describedby="titleHelp"
                        value={formData.title}
                        onChange={handleInput}
                        name="title"
                        required
                    />
                    <label htmlFor="content">Contenuto del post</label>
                    <textarea
                        type="text"
                        className="form-control my-2"
                        rows="3"
                        id="content"
                        aria-describedby="contentHelp"
                        value={formData.content}
                        onChange={handleInput}
                        name="content"
                        required
                    />
                    <label htmlFor="img">Immagine del post</label>
                    <input
                        type="text"
                        className="form-control my-2"
                        id="img"
                        aria-describedby="imgHelp"
                        value={formData.img}
                        onChange={handleInput}
                        name="img"
                        required />
                    <div className="card p-4 d-flex flex-wrap justify-content-between">
                        {tags.map((tag) => (
                            <div className="mb-3 form-check" key={tag.id}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="tags"
                                    name="tags"
                                    onChange={handleTags}
                                    value={tag.title}
                                    checked={formData.tags.includes(tag.title)}
                                />
                                <label className="form-check-label" htmlFor="avaiable">
                                    {tag.title}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="btn btn-success my-3">
                        Pubblica
                    </button>
                </form>
            </section>
            <ul></ul>
        </>
    )
}