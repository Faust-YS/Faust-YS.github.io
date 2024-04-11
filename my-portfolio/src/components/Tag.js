import React from 'react'
import '../App.css'


function Tag(tag) {
    return(
        <span class="inline-block py-1 px-2 rounded bg-green-50 text-green-500 text-xs font-medium tracking-widest">
        {tag}
      </span>
    )

}

export default Tag
