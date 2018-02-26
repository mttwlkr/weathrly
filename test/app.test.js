import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/components/App';
import {data} from '../lib/components/data';
import {currentCleaner} from '../lib/components/currentCleaner';
import {sevenHourCleaner} from '../lib/components/sevenHourCleaner';
import {tenDayCleaner} from '../lib/components/tenDayCleaner';

const currentCleanData = currentCleaner(data)
const sevenHourCleanData = sevenHourCleaner(data)
const tenDayCleanData = tenDayCleaner(data)

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start with initial state of no city and no currentWeather and no errors', () => {
    expect(wrapper.state().city).toEqual('')
    expect(wrapper.state().currentWeather).toEqual([])
    expect(wrapper.state().error).toEqual(false)
  })

  // This doesn't necessarily have information coming from the search bar...
  it('should get city info from search bar on click', () => {
    wrapper.instance().getWeather = jest.fn()

    expect(wrapper.state().city).toEqual('');
    wrapper.instance().getCity('Miami, FL');
    expect(wrapper.state().city).toEqual('Miami, FL');
  })

  it('should be able to set state of current Weather', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().currentWeather).toEqual([]);

    wrapper.setState({city: 'Lexington, Kentucky', 
      currentWeather: currentCleaner(data),
    })

    expect(wrapper.state().currentWeather.conditions).toEqual("Mostly Cloudy");
    expect(wrapper.state().currentWeather.temp).toEqual('46');
    expect(wrapper.state().currentWeather.low).toEqual('32');
    expect(wrapper.state().currentWeather.high).toEqual('51');
    expect(wrapper.state().currentWeather.day).toEqual(true);
  })

  it('should be able to set state of Seven Hour Weather to an array of seven objects', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().sevenHour).toEqual(undefined);

    wrapper.setState({city: 'Lexington, Kentucky', 
      currentWeather: currentCleaner(data),
      sevenHour: sevenHourCleaner(data),      
      tenDay: tenDayCleaner(data)
    })

    expect(wrapper.state().sevenHour.sevenHourArr[5].hour).toEqual('5:00 PM');
    expect(wrapper.state().sevenHour.sevenHourArr[5].temp).toEqual('48');
    expect(wrapper.state().sevenHour.sevenHourArr[5].condition).toEqual('Clear');
  })

  it('should be able to set state of Ten Day Weather to an array of ten objects', () => {
    expect(wrapper.state().city).toEqual('');
    expect(wrapper.state().tenDay).toEqual(undefined);

    wrapper.setState({city: 'Lexington, Kentucky', 
      currentWeather: currentCleaner(data),
      sevenHour: sevenHourCleaner(data),
      tenDay: tenDayCleaner(data)
    })

    expect(wrapper.state().tenDay.tenDayArr.length).toEqual(10)
    expect(wrapper.state().tenDay.tenDayArr[0].dayOfWeek).toEqual('Wed');
    expect(wrapper.state().tenDay.tenDayArr[1].date).toEqual(21);
    expect(wrapper.state().tenDay.tenDayArr[2].lowTemp).toEqual('44');
    expect(wrapper.state().tenDay.tenDayArr[3].highTemp).toEqual('47');
    expect(wrapper.state().tenDay.tenDayArr[4].monthName).toEqual('Dec');
    expect(wrapper.state().tenDay.tenDayArr[5].condition).toEqual('Clear');
  })

  it('should render the Search, CurrentWeather, SevenHourForecast and TenDayForecast Components', () => {

    wrapper.setState({city: 'Lexington, Kentucky', 
    currentWeather: currentCleaner(data),
    sevenHour: sevenHourCleaner(data),
    tenDay: tenDayCleaner(data)
    })

    expect(wrapper.find('Search').length).toEqual(1)
    expect(wrapper.find('CurrentWeather').length).toEqual(1)
    expect(wrapper.find('SevenHourForecast').length).toEqual(1)
    expect(wrapper.find('TenDayForecast').length).toEqual(1)  
  })

  it('should not render the Welcome page if a city is in local Storage or searched', () => {

    wrapper.setState({city: 'Lexington, Kentucky', 
    currentWeather: currentCleaner(data),
    sevenHour: sevenHourCleaner(data),
    tenDay: tenDayCleaner(data)
    })

    expect(wrapper.find('Welcome').length).toEqual(0)  
  })

  it('should render the Welcome page if a city is not in local Storage', () => {

    expect(wrapper.state().city).toEqual('')
    expect(wrapper.state().currentWeather).toEqual([])

    expect(wrapper.find('Welcome').length).toEqual(1)  
  })

  it('should throw an error if it receives bad data from the api', () => {

    wrapper.setState({city: 'Lexington, Kentucky', 
      error: true
    })

    expect(wrapper.find('p').length).toEqual(1)  
  })
})