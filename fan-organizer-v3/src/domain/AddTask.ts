import {firebase} from '../firebase';
/* 
export const BalanceData = ({id, foo, bar, foobaz}) => Object.freeze({
    id,
    foo,
    bar,
    foobaz
});
export const getFooOfId = (getFooOfIdImpl = async(userId) => {throw new Error("extends")}) => async userId => {
    try {
      const fooData = await getFooOfIdImpl(userId);
      return BalanceData(fooData);
    } catch (err) {
      throw new Error(`Unable to retrieve Foo with id ${userId}`);
    }
  }
  */
/*
const inMemoryFooDatabase = {
    foo17: {
        id: 'foo17',
        foo: 'a foo value',
        bar: 'a bar value',
        foobaz: 1234,
    },
};
const getFooOfIdFromInMemoryDatabase = getFooOfId(fooId => inMemoryFooDatabase[fooId])
*/
//firebase().firestore().collection('transactions').get()