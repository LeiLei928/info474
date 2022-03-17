import * as topojson from "topojson-client";
import worldTopo from "./world-topo";
import data from "./covid_country_12"; 
import data_june from "./covid_country_6"; 
import data_jan from "./covid_country_01";

import { geoMercator, geoPath } from "d3-geo";
import React, { useState } from "react";

const _worldTopo = topojson.feature(worldTopo, worldTopo.objects.units);
const countryShapes = _worldTopo.features;

const MapsExample = ({ width = 960, height = 500 }) => {
  const projection = geoMercator().center([0, 5]).scale(150).rotate([0, 0]);
  const path = geoPath().projection(projection);
var country_12 = [];

for(let i = 0; i < data.length; i++){
  country_12.push({
      
        iso_code: data[i].iso_code,
        cases: data[i].new_cases
    });
};

const dec_data = country_12.reduce((o, key) => ({ ...o, [key.iso_code]: key.cases}), {})

var country_6 = [];

for(let i = 0; i < data_june.length; i++){
  country_6.push({
      
        iso_code: data_june[i].iso_code,
        cases: data_june[i].new_cases
    });
};

const jun_data = country_6.reduce((o, key) => ({ ...o, [key.iso_code]: key.cases}), {})

var country_01 = [];

for(let i = 0; i < data_jan.length; i++){
  country_01.push({
      
        iso_code: data_jan[i].iso_code,
        cases: data_jan[i].new_cases
    });
};

const jan_data = country_01.reduce((o, key) => ({ ...o, [key.iso_code]: key.cases}), {})


const[month, setMonth] = useState(jun_data);
const[city, setCity] = useState(" ... ");
const[casenum, setCasenum] = useState(" ... (Click on a country to view more detail)");
const[monthnum, setMonthnum] = useState("June")



  return (
    <div>
      
      <h1>Covid 19 New Cases 2021 World Map</h1>
      <button 
        style={{ marginLeft: 400 }} 
        onClick={() => {
            setMonth(jan_data) ;
            setMonthnum("january") 
            setCity(" ... ");
            setCasenum(" ... (Click on a country to view more detail)")   
        }}>  January </button>
      <button 
        style={{ marginLeft: 200 }} 
        onClick={() => {
            setMonth(jun_data);
            setMonthnum("June")
            setCity(" ... ");
            setCasenum(" ... (Click on a country to view more detail)")
               
        }}>  June </button>
      <button 
        style={{ marginLeft: 200 }} 
        onClick={() => {
            setMonth(dec_data) ;
            setMonthnum("December") 
            setCity(" ... ");
            setCasenum(" ... (Click on a country to view more detail)")   
        }}>  December </button>

        
      <p style={{ marginLeft: 205 }}> Number of New cases in {monthnum} at {city} is {casenum}</p>
      <svg width={width} height={height} style={{ marginLeft: 200 }}>
        <g>
        
          {countryShapes.map((shape, i) => {
            const number = (month[shape.id] / 100000).toFixed(2);
           
            return (
            
              <path
                key={i}
                onClick={() => {
                  console.log(month[shape.id]);
                  console.log(shape);
                  setCity(shape.properties.name);
                  setCasenum(month[shape.id])
                 
                }}
                d={path(shape)}
                // fill={"#" + ((Math.random() * 0xffffff) << 0).toString(16)}
                fill = {"rgba(255,0,0," + number.toString() + ")"}
                stroke="black"
                strokeWidth={0.3}
              />             
            );
          })}
          {[1].map((city, i) => {
            return (
              <text
                
                fill="none"
                key={i}
              > where am i </text>
            );
          })}



        </g>
      </svg>
      <p style={{ marginLeft: 20 }}>This interactive map allows me to explore which countries are experiencing more severe Covid-19 impacts at the beginning, middle and end of 2021. The map has two interactive features. 1) The top button allows users to change the month they are watching 2) Users will also see the specific number of new cases in the country they click on.Based on the map, it is easy to see that there were more new cases in December and January, especially in countries in Europe and North America. An interesting part is that in June, most countries showed a decline in new Covid-19 cases, but in certain countries in South America and Asia, Covid-19 showed an upward trend, and a decreased again in December.  </p>
    </div>
   
  );
};

export default MapsExample;