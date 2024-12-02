import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Promotion_Part_1 from '../../assets/image/promotion_part.png'
import Product_Part_2 from '../../assets/image/promotion_Part_2png.png'
import Promotion_Part_3 from '../../assets/image/Promotion_Part_3.png'

const PromotionPart = () => {
  return (
    <>
    <div className="pt-44 pb-32">
        <Container>
            <Flex>
                <div className="space-x-6">
                    <Image imgSrc={Promotion_Part_1}/>
                </div>
                <div className="px-4"></div>
                <div className="space-y-6">
                    <Image imgSrc={Product_Part_2}/>
                    <Image imgSrc={Promotion_Part_3}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default PromotionPart