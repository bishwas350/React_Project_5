import React from 'react'
import Container from '../Container'
import { PiNumberTwoBold } from "react-icons/pi";
import Flex from '../Flex';
import Heading from '../Heading';
import { FaTruckFast } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";



const Guarantee = () => {
    return (
        <>
            <div className="py-7 border-b-2">
                <Container>
                    <Flex className={'justify-between'}>
                        <div className="">
                            <div className="flex items-center">
                                <PiNumberTwoBold className={'text-[30px]'} />
                                <Heading as={'h4'} text={'Two years warranty'} className={'text-menuColor text-[16px]'} />
                            </div>


                        </div>
                        <div className="">
                          <div className="flex items-center gap-x-2">
                          <FaTruckFast className='text-[30px] '/>
                          <Heading as={'h4'} text={'Free shipping'} className={'text-menuColor text-[16px]'}/>
                          </div>

                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 ">
                            <FaUndoAlt className='text-[30px] '/>
                                <Heading as={'h4'} text={'Return policy in 30 days'} className={'text-menuColor text-[16px]'}/>
                            </div>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Guarantee