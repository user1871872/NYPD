import React from 'react'
import Layout from '../layout/main'
import Carousel from '../components/carousel'

export default function home() {
    return (
        <div className='container'>
            <div>
                <Carousel/>
            </div>
            <Layout/>
        </div>
    )
}
