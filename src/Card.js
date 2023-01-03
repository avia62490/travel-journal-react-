import marker from './markerIcon.svg'

export default function Card(props) {
    return (
      <div>
          <section className="card">
              <img src={props.item.image} className="card--image" alt="" />
              <div className='card--body'>
                <span className='card--locationInfo'>
                    <img src={marker} className="card--markerIcon"  alt="" />
                    <h4 className='card--location'>{props.item.location}</h4>
                    <h4 className='card--googleMapURL'><a href={props.item.googleMapsUrl}>View on google maps</a></h4>
                </span>
                  <h1 className='card--title'>{props.item.title}</h1>
                  <h4 className='card--date'>{props.item.startDate} - {props.item.endDate}</h4>
                  <p className='card--description'>{props.item.description}</p>
              </div>
          </section>
          <hr/>
      </div>
    )
}