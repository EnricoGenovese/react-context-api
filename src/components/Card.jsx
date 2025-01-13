import { Link } from "react-router-dom";

export default function Card({ data, onDelete }) {

    const ulrHost = import.meta.env.VITE_HOST_URL || "http://localhost:3000/";
    // "images/img1.jpg"
    // url: localhost:5173 + images/img1.jpg
    // url: localhost:5173/posts/1 + images/img1.jpg

    // "/images/img1,jpg"
    // url: localhost:5173/images/img1.jpg
    // url: localhost:5173/images/img1.jpg

    // http://localhost:3000/
    // http://localhost:3001/
    // https://api-imges.com/

    return (
        <div className="card">
            <img src={`${ulrHost}${data.img}`} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text-truncate">{data.content}</p>
                <p className="card-text text-truncate">{data.tags.join(", ")}</p>
                <Link to={`/posts/${data.id}`} className="btn btn-primary">Dettagli</Link>
                <button key={data.id}
                    onClick={onDelete}
                    className="btn btn-danger mx-2">
                    Cancella
                </button>
            </div>
        </div>
    )
}