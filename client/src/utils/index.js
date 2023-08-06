//assets logo
import {
    RiBoxingFill,
    RiHeartFill,
    RiRunFill,
    RiShoppingBasketFill,
    RiUserLine,
    RiVidiconFill,
    RiBuilding2Fill,
    RiCheckboxCircleLine
} from 'react-icons/ri'
import {AiFillCaretRight, AiOutlineCaretLeft} from 'react-icons/ai'

//assets image
const imageLogo = require('../assets/logo.png')
const imgHeader = require('../assets/header.png')
const imageCLass1 = require('../assets/class-1.jpg')
const imageCLass2 = require('../assets/class-2.jpg')
const imgJoinClass = require('../assets/join.jpg')
const imageMember = require('../assets/member.jpg')
const imgClass = 
[
    {
        no: 1,
        image : imageCLass1,
        class : 'class__img-1'
    },
    {
        no : 2,
        image : imageCLass2,
        class : 'class__img-2'
    } 
]

const textNav = 
[
    {
        id : 1,
        title : 'Beranda',
        path : 'header'
    },
    {
        id : 2,
        title : 'Tentang',
        path : 'Program'
    },
    {
        id : 3,
        title : 'Service',
        path : 'service'
    },
    {
        id : 4,
        title : 'Program',
        path : 'Program'
    },
    {
        id : 5,
        title : 'Komunitas',
        path : 'Community'
    }

]


const exploreCard =
[
    {
        id : 1,
        icon : <RiBoxingFill/>,
        title : 'Strength',
        note : ' Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.',
        button : 'Join Now'
    },
    {
        id : 2,
        icon : <RiHeartFill/>,
        title : 'Physical Fitness',        
        note : ' It encompasses a range of activities that improve health, strength,flexibility, and overall well-being.',
        button : 'Join Now'
    },
    {
        id : 3,
        icon : <RiRunFill/>,
        title : 'Fat Lose',        
        note : ' Through a combination of workout routines and expert guidance, well empower you to reach your goals.',
        button : 'Join Now'
    },
    {
        id : 4,
        icon : <RiShoppingBasketFill/>,
        title : 'Weight Gain',        
        note : 'Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.',
        button : 'Join Now'
    },
    

]

export { 
    textNav, 
    exploreCard,
    imageLogo,
    imgHeader, 
    imgClass, 
    imgJoinClass,
    imageMember,
    AiFillCaretRight,
    AiOutlineCaretLeft,
    RiUserLine,
    RiVidiconFill,
    RiBuilding2Fill,
    RiCheckboxCircleLine
};
