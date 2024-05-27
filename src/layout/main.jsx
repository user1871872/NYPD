import React from 'react'
import About from '../pages/about'
import Services from '../pages/services'
import Contact from '../pages/contact'
import Members from '../pages/members'
import Events from '../pages/events'

function layout() {
    const screens = [
        { pages: <About />, id: 'about' },
        { pages: <Services />, id: 'services' },
        { pages: <Events />, id: 'events' },
        { pages: <Members />, id: 'members' },
        { pages: <Contact />, id: 'contact' },
        
    ]
    return (
        <div className='container'>
            <div className='layout'>
            {screens.map((page) => (
                <span key={page.id}>
                    {page.pages}
                </span>
            ))}
            </div>
        </div>
    )
}
export default layout
