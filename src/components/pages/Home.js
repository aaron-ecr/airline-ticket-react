import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchForm  from  '../../container/search-form/search-form';
import FlightsGrid from '../flights-grid/flights-grid';
import { getFlights } from '../../actions';

function Home(props){

  //console.log("props-Homa", props);
    useEffect(() => {
        props.getFlights()
      }, [(props.flights || []).legnth]);

      const { origin, destination, departureDate, returnDate } = props.filters || {};

    return(

        <section className="Main-container">
        <aside className="Search-section">
          <SearchForm></SearchForm>
        </aside>
        <section className="Results-section">
          { props.routes && props.routes.onwards && <FlightsGrid 
            flights={ props.routes.onwards} 
            criteria={{origin, destination, date: departureDate}}
          ></FlightsGrid> }
          {props.routes && props.routes.return && <FlightsGrid 
            flights={ props.routes.return}
            criteria={{origin: destination, destination: origin, date: returnDate}}
          ></FlightsGrid>}
        </section>
      </section>

    );

}

const mapStateToProps = (state) => ({
    flights: state.flights,
    routes: state.routes,
    filters: state.filters
  })
  
  const mapDispatchToProps = {
    getFlights
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)