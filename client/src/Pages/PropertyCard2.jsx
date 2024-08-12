const PropertyCard2 = ({ property }) => {
    return (
      <div className="card">
        <img src={property.imageUrl} alt={property.name} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text">{property.description}</p>
          <a href={`/property/${property.id}`} className="btn btn-primary">View Details</a>
        </div>
      </div>
    );
  };
  export default PropertyCard2;