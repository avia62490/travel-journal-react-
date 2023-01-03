import marker from './markerIcon.png'

export default function Card(props) {
    return (
        <section className="card">
            <img src={props.item.image} className="card--image" alt="" />
            <img src={marker} className="card-markerIcon"  alt="" />
            <h4><a href={props.item.googleMapsUrl}>View on google maps</a></h4>
        </section>
    )
}