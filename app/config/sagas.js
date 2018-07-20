import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR} from '../actions/currencies';
import {takeEvery, select, call, put} from 'redux-saga/effects';


const getLatestRate = currency => fetch('http://api.fixer.io/latest?base=${currency}');


function* fetchLatestConversionRate(action) {
   
    try { 
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.err) {
          yield put({type: CONVERSION_RESULT , error: result.error});
        } else {
          yield put({type: CONVERSION_RESULT , result});
        }

    } catch (e) {
        yield put({type: CONVERSION_RESULT , error: result.message});
    }
};



export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRate);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRate);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRate);
}