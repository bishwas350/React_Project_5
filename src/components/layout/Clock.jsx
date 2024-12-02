import React from 'react'
import Container from '../Container'
import Image from '../Image'
import banner_Part_2 from '../../assets/image/Banner_Part_2.png'
const Clock = () => {
  return (
    <div className="pt-32 pb-32">
        <Container>
            <Image imgSrc={banner_Part_2}/>
        </Container>
    </div>
  )
}

export default Clock