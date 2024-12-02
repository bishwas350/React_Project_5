import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Menu from '../Menu'
import Heading from '../Heading'
import Image from '../Image'
import Footer_img from '../../assets/image/Logo.png'

const Footer = () => {
    return (
        <>
            <div className="bg-footerColor  py-5">
                <Container>
                    <Flex className={'pt-14'}>
                        <div className="">
                            <Menu className={'flex-col space-y-5 '}>
                                <li className='font-bold text-[16px] leading-[23px] text-menuColor2'>MENU</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Home</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Shop</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>About</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Contact</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Journal</li>
                            </Menu>
                        </div>
                        <div className="ml-36">
                            <Menu className={'flex-col space-y-5 '}>
                                <li className='font-bold text-[16px] leading-[23px] text-menuColor2'>SHOP</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Category </li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Category </li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Category </li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Category </li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Category </li>
                            </Menu>
                        </div>
                        <div className="ml-32">
                            <Menu className={'flex-col space-y-5 '}>
                                <li className='font-bold text-[16px] leading-[23px] text-menuColor2'>HELP</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Privacy Policy</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Terms & Conditions</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Special E-shop</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Shipping</li>
                                <li className='text-[14px] leading-[23px] text-footerColor2'>Secure Payments</li>
                            </Menu>
                        </div>
                        <div className="max-w-[260px] ml-32">
                            <Heading as={'h4'} text={'(052) 611-5711  company@domain.com'} className={'font-bold text-[16px] text-menuColor2 leading-[27px] pb-4'} />
                            <Heading as={'p'} text={'575 Crescent Ave. Quakertown, PA 18951'} className={'text-footerColor2 text-[14px] leading-[23px]'} />
                        </div>
                        <div className="ml-60">
                            <Image imgSrc={Footer_img} className={'mb-48'}/>
                           
                        </div>
                    </Flex>
                   <div className="text-end pt-16">
                   <Heading as={'p'} text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} className={'text-[14px] leading-[23px] text-footerColor2 '}/>
                   </div>
                </Container>
            </div>
        </>
    )
}

export default Footer