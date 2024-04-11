import React from 'react'
import Tag from './Tag.js'
import '../App.css'

function Card(props) {
  console.log(typeof(props.tags));
  
  //const TagArr = props.tags;
  //console.log("TAg aaaarr"+ typeof(TagArr));
  //const Tags = TagArr.map(tag => <Tag tag={tag}/>);
  return (
    <div class="xl:w-1/4 md:w-1/3 p-4">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src={props.pic}
          alt="content"
        ></img>
        <h3 class="tracking-widest text-lakeblue text-xs font-medium title-font">
          {props.subtitle}
        </h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          {props.title}
        </h2>
        <p class="leading-relaxed text-base">{props.describe}</p>

      </div>
    </div>
  )
}

export default Card
