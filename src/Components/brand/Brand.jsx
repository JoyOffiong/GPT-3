import React from 'react'
import './brand.css'
import { google, atlassian, slack, dropbox, shopify } from './import'

function Brand() {
  return (
    <div className='gpt3__brand section'>
        <div>
            <img src={google} alt="goole" /> 
        </div>
        <div>
            <img src={atlassian} alt="goole" />
        </div>
        <div>
            <img src={slack} alt="goole" />
        </div>
        <div>
            <img src={dropbox} alt="goole" />
        </div>
        <div>
            <img src={shopify } alt="goole" />
        </div>
    </div>
  )
}

export default Brand