import { AxisLeft, AxisBottom } from "@visx/axis";
import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import './App.css'
import data from './covid.json'

function App() {

  const newCase = [];
  

  
  

  
  const continent = [
    "Africa",
    "Asia",
    "North America",
    "South America",
    "Europe",
    "Oceania",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const africa=[];
  const asia=[];
  const northA=[];
  const europe=[];
  const southA=[];
  const oceania=[];
 

  for (let i=0; i<data.length; i++){
    if(data[i].continent == "Africa"){
      africa.push(data[i].new_cases)
    }
    if(data[i].continent == "Asia"){
      asia.push(data[i].new_cases)
    }
    if(data[i].continent == "North America"){
      northA.push(data[i].new_cases)
    }
    if(data[i].continent == "South America"){
      europe.push(data[i].new_cases)
    }
    if(data[i].continent == "Europe"){
      southA.push(data[i].new_cases)
    }
    if(data[i].continent == "Oceania"){
      oceania.push(data[i].new_cases)
    }
    newCase.push(data[i].new_cases)
  }

  const chartSize = 750;
  const margin = 150;
  const legendPadding = 100;
  const _extent = extent(newCase);
  const _scaleY = scaleLinear()
    .domain([0, _extent[1]])
    .range([chartSize - margin, margin]);
 
  const _scaleLine = scaleLinear()
    .domain([0, 11])
    .range([margin, chartSize - margin]);
  
  const _scaleDate = scaleBand()
    .domain(months)
    .range([0, chartSize - margin - margin]);

  const _lineMaker = line()
    .x((d, i) => {
      return _scaleLine(i);
    })
    .y((d) => {
      return _scaleY(d);
    });

  const covid = {Africa:africa, Asia:asia, 'North America':northA, 'South America': southA, Europe:europe, Oceania:oceania};
  


  return (
    <div className="App" style={{ margin: 20 }}>
      <h1>Covid-19 New Cases Based on Continent</h1>
      <div style={{ display: "flex" }}> 
      <svg
          width={chartSize + legendPadding}
          height={chartSize}
      >
        <AxisLeft strokeWidth={1} left={margin} scale={_scaleY} />
          <AxisBottom
            strokeWidth={0}
            top={chartSize - margin}
            left={margin}
            scale={_scaleDate}
          />
          <text x="-400" y="40" transform="rotate(-90)" fontSize={20}>
            Number of New Cases
          </text>
          <text x="-400" y="60"  transform="rotate(-90)" fontSize={20}>
            Monthly at 2021
          </text>
          {continent.map((city, i) => { 
            return (
              <path
                stroke={city === "North America" ? "blue" : "black"}
                strokeWidth={city === "North America" ? 4 : 1}
                fill="none"
                key={city}
                d={_lineMaker(covid[city])}
              />
            );
          })}

          {continent.map((city, i) => {
            return (
              <text
                fill={"black"}
                style={{
                  fontSize: 10,
                  fontWeight: city === "North America" ? 800 : 500,
                }}
                key={`legend--${city}`}
                x={chartSize - margin + 5}
                y={_scaleY(covid[city][11])}
              >
                {city}
              </text>
            );
          })}
          
      </svg>
      </div>
      <p>
      
      The dataset I use is based on a monthly summary of new cases in 2021 for the continents. I wanted to examine how the number of new cases varies between continents. Therefore, I used a line graph because it is the best way to convey the change in the time series. In particular, I wanted to observe the change in new cases in North America, and since this is where I am staying now, I have color-changed the data for this continent. While the chart may be biased because the populations differ by continent, I was still able to observe a trend from this line graph. Interestingly, excluding Asia, all other continents saw an increase in new cases of Virus 19 in December at the end of the year. Potential reasons for this could be the drop in temperature, or the arrival of holidays such as Thanksgiving and Christmas.

      </p>
      
    </div>
  )
}

export default App
