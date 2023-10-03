export type WeatherIconTypes = {
  imgURL: string
  desc: string
  dayData?: number
}

export type ForecastTypes = {
  location: {
    name: string
    country: string
  }
  current: {
    temp_f: number

    condition: {
      code: number
      icon: string
    }
    feelslike_f: number
    wind_mph: number
    wind_dir: number
    humidity: number
    uv: number
  }
}

// {
//     "location": {
//       "name": "Lagos",
//       "region": "Lagos",
//       "country": "Nigeria",
//       "lat": 6.45,
//       "lon": 3.4,
//       "tz_id": "Africa/Lagos",
//       "localtime_epoch": 1695815368,
//       "localtime": "2023-09-27 12:49"
//     },
//     "current": {
//       "last_updated_epoch": 1695815100,
//       "last_updated": "2023-09-27 12:45",
//       "temp_c": 28.0,
//       "temp_f": 82.5,
//       "is_day": 1,
//       "condition": {
//         "text": "Partly cloudy",
//         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
//         "code": 1003
//       },
//       "wind_mph": 11.4,
//       "wind_kph": 18.4,
//       "wind_degree": 223,
//       "wind_dir": "SW",
//       "pressure_mb": 1012.0,
//       "pressure_in": 29.89,
//       "precip_mm": 0.0,
//       "precip_in": 0.0,
//       "humidity": 73,
//       "cloud": 42,
//       "feelslike_c": 31.3,
//       "feelslike_f": 88.4,
//       "vis_km": 10.0,
//       "vis_miles": 6.0,
//       "uv": 7.0,
//       "gust_mph": 14.3,
//       "gust_kph": 23.0
//     }
//   }
