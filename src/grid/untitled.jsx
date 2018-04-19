  var cardGrid = undefined;
    if (this.state.style && this.state.places[this.state.style]){
      var style = this.state.places[this.state.style];
      cardGrid = (
        <li key={card.id}>
              <Card
                name={card.name}
                img={card.img}
                style={card.style}
                daysAvalable={card.daysAvalable}
                deal={card.deal}
                price={card.price}
                location={card.location}
              />
          </li>
      );
    }
    return (

          <select className="placeName" name="placeName" value={this.state.placeid} onChange={this.placeChanged}>
            <option value="">Select A Style</option>
            {Object.values(this.state.style).map((styles) => (<option key={place.id} value={place.id}>{place.name}</option>))}
          </select>

          <section className='display-place'>
            <div className="wrapper">
              <ul>
                {cardGrid}
              </ul>
            </div>
          </section>



