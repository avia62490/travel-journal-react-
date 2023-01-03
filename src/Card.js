import marker from './markerIcon.png'

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.item.image} className="card--image" alt="" />
            <img src={marker} className="card-markerIcon"  alt="" />
            <h3>{props.item.location}</h3>
            <h4><a href={props.item.googleMapsUrl}>View on google maps</a></h4>
            <h1>{props.item.title}</h1>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p>{props.item.description}</p>
        </section>
    )
}