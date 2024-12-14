import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Product_1 from '../../assets/image/Product_Image_1.png'
import Badge from '../Badge'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Product_2 from '../../assets/image/Product_Image_2.png'
import Product_3 from '../../assets/image/Product_Image_3.png'
import Product_4 from '../../assets/image/Product_Image_4.png'
import Product_5 from '../../assets/image/Product_Image_5.png'
import Product_6 from '../../assets/image/Product_Image_6.png'
import Product_7 from '../../assets/image/Product_7.png'
import Product_8 from '../../assets/image/Product_8.png'
import SpacialPart from '../layout/SpacialPart'


const Shop = () => {
    return (
        <>
            <div className="pt-7">
                <Container>
                    <div className="pb-12">
                        <Heading as={'h2'} text={'New Arrivals'} className={'text-[30px] font-bold'} />
                    </div>

                    <div className="">
                        <Flex className={'justify-between flex-wrap gap-y-5'}>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_1} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_2} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_3} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_4} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_5} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_6} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_7} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[24%] relative group">
                                <Image imgSrc={Product_8} />
                                <Badge badgebtn={'New'} className={'absolute top-5 left-5'} />
                                <div className="py-6 bg-white flex gap-x-3 items-center">
                                    <Heading as={'h3'} text={'Basic Crew Neck Tee'} className={'font-bold text-[20px]'} />
                                    <Heading as={'h3'} text={'$44.00'} className={'text-[16px] leading-[30%] text-menuColor'} />
                                </div>
                                <div className="p-7 absolute bottom-16 left-0 w-full hidden hover:duration-100 group-hover:block">
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Wish List</span><FaHeart />
                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px]  hover:text-menuColor2 hover:font-bold'>Compare</span><IoMdGitCompare />

                                    </div>
                                    <div className="justify-end flex items-center gap-x-2">
                                        <span className='text-menuColor text-[16px] hover:text-menuColor2 hover:font-bold'>Add to Cart</span><FaShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </Flex>
                    </div>

                </Container>
            </div>

            <SpacialPart/>

        </>
    )
}

export default Shop