import { AxisLeft, AxisBottom } from "@visx/axis";
import { scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import * as d3 from "d3";
import './App.css'
import data from './covid.json'
import { concat } from "lodash";

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

  const africa = [];
  const asia = [];
  const northA = [];
  const europe = [];
  const southA = [];
  const oceania = [];


  for (let i = 0; i < data.length; i++) {
    if (data[i].continent == "Africa") {
      africa.push(data[i].new_cases)
    }
    if (data[i].continent == "Asia") {
      asia.push(data[i].new_cases)
    }
    if (data[i].continent == "North America") {
      northA.push(data[i].new_cases)
    }
    if (data[i].continent == "South America") {
      europe.push(data[i].new_cases)
    }
    if (data[i].continent == "Europe") {
      southA.push(data[i].new_cases)
    }
    if (data[i].continent == "Oceania") {
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


  const covid = { Africa: africa, Asia: asia, 'North America': northA, 'South America': southA, Europe: europe, Oceania: oceania };

  const month_case = [];
  var sum = 0;

  const month_case_new = [];
  var year = "2021-";
  for (let i = 0; i < 12; i++) {
    let time = i + 1;
    if (time < 10) {
      year = "2021-0";
    } else {
      year = "2021-";
    }
    for (let j = 0; j < data.length; j++) {
      if (data[j].month == year.concat(time.toString())) {
        sum = sum + data[j].new_cases;
      }
    }
    console.log(year.concat(time.toString()))
    month_case_new.push(sum);
    sum = 0;

  }


  const _scaleYSum = scaleLinear()
    .domain([0, extent(month_case_new)[1]])
    .range([chartSize - margin, margin]);

  const _lineMakerSum = line()
    .x((d, i) => {
      return _scaleLine(i);
    })
    .y((d) => {
      return _scaleYSum(d);
    });

  var minCase = 0;

  var maxCase = _extent[1];

  const covidChartWidth = 400;
  const covidChartHeight = 100;
  const covidMargin = 20;
  const covidAxisTextPadding = 5;

  const covidCaseScale = scaleLinear()
    .domain([minCase, maxCase])
    .range([covidMargin, covidChartWidth - covidMargin - covidMargin]);


  /* working with bins to generate a histogram */
  /* first, instantiate a parameterized generator (exciting) */
  const tBinGenerator = d3.bin().value((d) => d.new_cases);

  const covidBins = tBinGenerator(data);
  const covidBarHeightScale = scaleLinear()
    .domain([0, d3.max(covidBins, (d) => d.length)])
    .range([
      covidChartHeight - covidMargin - covidAxisTextPadding,
      covidMargin,
    ]);



  const cont_case = [
    { continent: "Africa", newCase: africa.reduce((partialSum, a) => partialSum + a, 0) },
    { continent: "North America", newCase: northA.reduce((partialSum, a) => partialSum + a, 0) },
    { continent: "Asia", newCase: asia.reduce((partialSum, a) => partialSum + a, 0) },
    { continent: "South America", newCase: southA.reduce((partialSum, a) => partialSum + a, 0) },
    { continent: "Europe", newCase: europe.reduce((partialSum, a) => partialSum + a, 0) },
    { continent: "Oceania", newCase: oceania.reduce((partialSum, a) => partialSum + a, 0) },
  ]

  const GRAPH_MARGIN = 20
  const GRAPH_BAR_WIDTH = 10

  const SVGHeight = 300
  const SVGWidth = 500
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN
  // X scale point
  const xDomain = data.map(item => item.continent)
  const xRange = [0, graphWidth]
  const x = d3.scalePoint()
    .domain(xDomain)
    .range(xRange)
    .padding(1)

  // Y scale linear
  const yDomain = [0, 65107259]
  const yRange = [0, graphHeight]
  const y = d3.scaleLinear()
    .domain(yDomain)
    .range(yRange)

  return (
    <div className="App" style={{ margin: 20 }}>
      <h1>Covid-19 New Cases 2021 analysis</h1>
      <h2>line plots of covid-19 new cases change monthly</h2>
      <div style={{ display: "flex" }}>
        <svg
          width={chartSize + legendPadding}
          height={chartSize}
        >
          <AxisLeft strokeWidth={1} left={margin} scale={_scaleYSum} />
          <AxisBottom
            strokeWidth={0}
            top={chartSize - margin}
            left={margin}
            scale={_scaleDate}
          />
          <text x="-400" y="40" transform="rotate(-90)" fontSize={20}>
            Number of New Cases
          </text>
          <text x="-400" y="60" transform="rotate(-90)" fontSize={20}>
            Monthly at 2021
          </text>
          {[1].map((city, i) => {
            return (
              <path
                stroke={city === 1 ? "blue" : "black"}
                // strokeWidth={city === "North America" ? 4 : 1}
                fill="none"
                key={i}
                d={_lineMakerSum(month_case_new)}
              />
            );
          })}



        </svg>
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
          <text x="-400" y="60" transform="rotate(-90)" fontSize={20}>
            Monthly at 2021 Based on Continent
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
      <p>I also created another line chart consisting of a monthly summary of new case changes. Based on that chart, I can observe a pattern. New cases seem to decrease at the beginning of the year and then increase from March onwards. It is interesting to consider the reasons for this change. Why do the new cases in Covid-19 trend to increase again after each decrease (The growth of covid seems never-ending). If the pattern is consistent for 2022, new cases should reach a high point in January and begin to decrease in February.</p>

      <h2>strip plot of new cases monthly in 2021 for different continent</h2>
      <div style={{ display: "flex" }}>
        <svg
          height={covidChartHeight}
          width={covidChartWidth}
        // style={{ border: "1px solid black" }}
        >
          {data.map((onecase, i) => {
            return (
              <circle
                key={i}
                cx={covidCaseScale(onecase.new_cases)}
                cy={covidChartHeight / 2}
                r={5}
                style={{ stroke: "rgba(50,50,50,.5)", fill: "none" }}
              />
            );
          })}
          <AxisBottom
            strokeWidth={1}
            top={covidChartHeight - covidMargin - covidAxisTextPadding}
            scale={covidCaseScale}
            numTicks={7}
          />
        </svg>
      </div>
      <h2>histogram of new cases monthly in 2021 for different continent</h2>
      <div style={{ display: "flex" }}>
        <svg width={covidChartWidth} height={covidChartHeight}>
          {covidBins.map((bin, i) => {
            return (
              <rect
                key={i}
                fill="steelblue"
                x={covidCaseScale(bin.x0) + 1}
                y={covidBarHeightScale(bin.length)}
                width={Math.max(
                  0,
                  covidCaseScale(bin.x1) - covidCaseScale(bin.x0) - 1
                )}
                height={
                  covidBarHeightScale(0) - covidBarHeightScale(bin.length)
                }
              />
            );
          })}
          {covidBins.map((bin, i) => {
            return (
              <text
                key={i}
                fill="black"
                fontSize="10"
                textAnchor="middle"
                x={
                  ((covidCaseScale(bin.x0) + covidCaseScale(bin.x1)) / 2) |
                  0
                }
                y={covidBarHeightScale(bin.length) - 2}
              >
                {bin.length}
              </text>
            );
          })}
          <AxisBottom
            strokeWidth={1}
            top={covidChartHeight - covidMargin - covidAxisTextPadding}
            scale={covidCaseScale}
            numTicks={7}
          />
        </svg>
      </div>
      <h2>bar plot of 2021 covid-19 new cases based on continents</h2>
      <div style={{ display: "flex" }}>
        <svg width={SVGWidth} height={500} margin="100">
          <g y={graphHeight}>
            {cont_case.map(item => {
              console.log(y(item.newCase));
              return (
                <rect
                  key={item.continent}
                  x={x(item.continent) - (GRAPH_BAR_WIDTH / 2)}
                  y={-y(item.newCase) + 300}
                  rx={2.5}
                  width={GRAPH_BAR_WIDTH}
                  height={y(item.newCase)}
                  fill="black"
                  stroke={"black"}

                />


              );
            })}

            {cont_case.map(item => {
              console.log(y(item.newCase));
              return (
                <text
                  key={'label' + item.continent}
                  fontSize="10"
                  x={x(item.continent)}
                  y={"320"}
                  textAnchor="middle">{item.continent}
                </text>
              );
            })}
            {cont_case.map(item => {
              console.log(y(item.newCase));
              return (
                <text
                  key={'label' + item.continent}
                  fontSize="8"
                  x={x(item.continent)}
                  y={-y(item.newCase) + 290}
                  textAnchor="middle">{item.newCase}
                </text>
              );
            })}
            <line
              x1=""
              y1="300"
              x2={graphWidth}
              y2="300"
              fill="black"
              stroke={"black"}
            />
          </g>
        </svg>

      </div>
      <p>The strip plot and histogram show that when the continent is ignored, new cases tend to be less than 4 million per month. The data points in the strip plot are concentrated at slightly greater than 2 million, which is consistent with the line chart. The bar chart is interesting because I also compare it to the total population on each continent. Asia is the most populous of the continents, so it makes sense that there are more covid-19 cases. However, South America has the fifth highest population of any continent, but the highest number of covid-19 cases of any continent. This could be due to underlying reasons such as regulation, restrictions, or differences in vaccination rates.</p>
      <div>

      </div>


    </div>
  )
}

export default App
