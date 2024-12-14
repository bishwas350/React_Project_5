import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/image/Logo.png'
import Menu from '../Menu'
import { RiMenu2Fill } from "react-icons/ri";
import Heading from '../Heading'
import { IoIosSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router'



const Header = () => {
  return (
    <>

        <div className="py-5 ">
            <Container>
                <Flex className={'justify-between'}>
                    <div className="w-[40%]">
                        <Link to={'/'}>
                        <Image imgSrc={Logo}/>

                        </Link>
                    </div>
                    <div className="w-[60%]">
                        <Menu className={"text-menuColor text-[14px]"}>
                            <Link to={"/"}>
                            <li className={'hover:text-menuColor2 hover:font-bold'}>Home</li>

                            </Link>
                            <Link to={"/Shop"}>
                            <li className={'hover:text-menuColor2 hover:font-bold'}>Shop</li>

                            </Link>
                            <li className={'hover:text-menuColor2 hover:font-bold'}>About</li>
                            <li className={'hover:text-menuColor2 hover:font-bold'}>Contacts</li>
                            <li className={'hover:text-menuColor2 hover:font-bold'}>Journal</li>
                        </Menu>
                    </div>
                </Flex>
            </Container>
        </div>
        <div className="py-5 bg-backgroundColor">
            <Container>
                <Flex>
                    <div className="w-[30%]">
                   <Flex className={'gap-x-3 items-center'}>
                   <RiMenu2Fill />
                   <Heading as={'p'} text={'Shop by Category'} className={'text-menuColor2 text-[14px]'}/>
                   </Flex>
                    </div>
                    <div className="w-[40%] relative">
                        <input type='text' placeholder='Scerch products' className='w-full p-4 rounded-md'/>
                        <IoIosSearch className={'absolute top-1/2 right-3 -translate-y-1/2 text-[20px] '}/>

                    </div>
                    <div className="w-[20%] pt-4">
                        <Flex className={'justify-end items-center gap-x-8'}>
                            <div className="flex gap-2 items-center ">
                            <FaUserAlt />
                            <FaAngleDown />

                            </div>
                            <FaShoppingCart />

                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Header