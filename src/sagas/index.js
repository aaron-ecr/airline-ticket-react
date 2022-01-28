import { put, takeLatest, all } from 'redux-saga/effects';
import { findPaths } from './../lib/flightManager';
import { transformFlightDates } from './../lib/utils';

//NEW API - MOCK  
//const API_MOCK= 'https://a5a31eeb-ef6f-40d4-a2d5-738ce0c222d1.mock.pstmn.io/flights';

//Fake -API 
const API_MOCK= 'https://b5b22acc-oj6u-432c6-a2d5-738ce98jlkjkj80c33499d1l_l.mock.postmn.io/flights';

//Products
function* fetchFlights() {
  try {
    const json = yield fetch(API_MOCK)
      .then(response => {
        
        console.log("Holi", response.clone().json());
        return response.clone().json()});
    yield put({ type: "GET_FLIGHTS_SUCCESS", json: transformFlightDates(json) });
  } catch (e) {
    console.log('error', e);
    yield put({ type: "GET_FLIGHTS_FAIL", error: e });
  }

}

function* findFlights(payload) {
  try {
    yield put({ type: "GET_FILTERS_SUCCESS", json: payload.payload.criteria });
    
    const { flights, criteria: { returnDate, origin, destination, departureDate, numOfPassengers } } = payload.payload;
    const listOfFlights = {};
    
    if (returnDate) {
      listOfFlights.return = findPaths({ flights, criteria: { origin: destination, destination: origin, date: returnDate, numOfPassengers } })
    }

    listOfFlights.onwards = findPaths({ flights, criteria: { origin, destination, date: departureDate, numOfPassengers } });
    
    yield put({ type: "GET_ROUTES_SUCCESS", json: listOfFlights });
  } catch (e) {
    console.log('error', e);
    yield put({ type: "GET_ROUTES_FAIL", error: e });
  }

}

function* flightsWatcher() {
  yield takeLatest('GET_FLIGHTS', fetchFlights)
}

function* findFlightsWatcher() {
  yield takeLatest('GET_ROUTES', findFlights)
}

export default function* rootSaga() {
  yield all([
    flightsWatcher(),
    findFlightsWatcher()
  ]);
}
