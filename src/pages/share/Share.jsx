import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './share.css'
function Share() {
    return (

        <div className='containersharemain'>
            <Navbar />

            <div className='containershare'>
                <div className='image'>
<div className='from'>

    Anonymous
</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reprehenderit distinctio quia commodi eius asperiores temporibus aliquid possimus molestiae porro iste. Omnis, cum! Aspernatur reiciendis, ex enim cumque blanditiis inventore.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quod nobis, deserunt at repudiandae quae assumenda blanditiis accusamus itaque id doloribus, voluptatem nihil a facere fugiat ex facilis amet. Asperiores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, excepturi mollitia distinctio temporibus ratione sint reiciendis libero, iusto neque placeat, qui doloribus ad deserunt ipsa minima rem rerum. Et, odio.
                    
                </div>
                <button className='sharebtn'>Share</button>
            </div>
           
        </div>
    )
}

export default Share