import '../../styles/New.css';
export function New( {title, description, img} ) {
    return (
        <div className="bg-new">
            <img src={img} alt="bg-new" />
            <h1>{title} </h1>
            <p>{description}</p>
        </div>
    )
}