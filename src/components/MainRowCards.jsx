import { React, useEffect, useState } from 'react'
import facebookIcon from '../assets/icon-facebook.svg' 
import twitterIcon from '../assets/icon-twitter.svg' 
import instagramIcon from '../assets/icon-instagram.svg' 
import youtubeIcon from '../assets/icon-youtube.svg'
import upIcon from '../assets/icon-up.svg'
import downIcon from '../assets/icon-down.svg'
import { dashData } from '../services/DataServices'

const MainRowCards = () => {
    const [userFB, setuserFB] = useState("");
    const [friendsFB, setFriendsFB] = useState("");
    const [todayFB, setTodayFB] = useState("");

    const [userX, setuserX] = useState("");
    const [friendsX, setFriendsX] = useState("");
    const [todayX, setTodayX] = useState("");

    const [userIG, setuserIG] = useState("");
    const [friendsIG, setFriendsIG] = useState("");
    const [todayIG, setTodayIG] = useState("");

    const [userYT, setuserYT] = useState("");
    const [friendsYT, setFriendsYT] = useState("");
    const [todayYT, setTodayYT] = useState("");

    useEffect(() => {
        const getData = async () => {
            const mediaInfo = await dashData();
            console.log(mediaInfo.media);

            setuserFB(mediaInfo.media.facebook[0].user);
            setFriendsFB(mediaInfo.media.facebook[0].friends);
            setTodayFB(mediaInfo.media.facebook[0].today);

            setuserX(mediaInfo.media.twitter[0].user);
            setFriendsX(mediaInfo.media.twitter[0].followers);
            setTodayX(mediaInfo.media.twitter[0].today);

            setuserIG(mediaInfo.media.instagram[0].user);
            setFriendsIG(mediaInfo.media.instagram[0].followers);
            setTodayIG(mediaInfo.media.instagram[0].today);

            setuserYT(mediaInfo.media.youtube[0].user);
            setFriendsYT(mediaInfo.media.youtube[0].subscribers);
            setTodayYT(mediaInfo.media.youtube[0].today);
        }

        getData();

    }, [])

  return (
    <>
        <div className='flex flex-row justify-center'>
            {/* Facebook */}
            <div className='bg-gray-800 w-[15%] h-fit m-5 border-t-4 border-blue-500 rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-center gap-2'>
                    <img src={facebookIcon} className='w-[1rem]' alt="Facebook Icon" />
                    <p className='text-gray-400 text-center text-xs'>{userFB}</p>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-5xl text-center font-semibold'>{friendsFB}</p>
                    <p className='text-gray-400 text-xl text-center font-extralight pt-1 pr-1'>Followers</p>
                </div>

                <div className='flex flex-row place-self-center gap-1'>
                    <img src={upIcon} className='self-center' alt="Up Icon" />
                    <p className='text-green-500 text-[.5rem] mt-5 pr-2 pb-5'>{todayFB} Today</p>
                </div>

            </div>

            {/* twitter */}
            <div className='bg-gray-800 w-[15%] h-fit m-5 border-t-4 border-cyan-500 rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-center gap-2'>
                    <img src={twitterIcon} className='w-[1rem]' alt="Twitter Icon" />
                    <p className='text-gray-400 text-center text-xs'>{userX}</p>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-5xl text-center font-semibold'>{friendsX}</p>
                    <p className='text-gray-400 text-xl text-center font-extralight pt-1 pr-1'>Followers</p>
                </div>

                <div className='flex flex-row place-self-center gap-1'>
                    <img src={upIcon} className='self-center' alt="Up Icon" />
                    <p className='text-green-500 text-[.5rem] text-center mt-5 pr-2 pb-5'>{todayX} Today</p>
                </div>

            </div>

            {/* instagram */}
            <div className='bg-gray-800 w-[15%] h-fit m-5 rounded-[0.25rem]'>
                <div className='igTopBorder rounded-t-[0.25rem] w-fill h-[0.25rem]'></div>
                <div className='mt-5 flex flex-row justify-center gap-2'>
                    <img src={instagramIcon} className='w-[1rem]' alt="Instagram Icon" />
                    <p className='text-gray-400 text-center text-xs'>{userIG}</p>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-5xl text-center font-semibold'>{friendsIG}</p>
                    <p className='text-gray-400 text-xl text-center font-extralight pt-1 pr-1'>Followers</p>
                </div>
                
                <div className='flex flex-row place-self-center gap-1'>
                    <img src={upIcon} className='self-center' alt="Up Icon" />                
                    <p className='text-green-500 text-[.5rem] text-center mt-5 pr-2 pb-5'>{todayIG} Today</p>
                </div>
            </div>

            {/* youtube */}
            <div className='bg-gray-800 w-[15%] h-fit m-5 border-t-4 border-red-500 rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-center gap-2'>
                    <img src={youtubeIcon} className='w-[1rem]' alt="Youtube Icon" />
                    <p className='text-gray-400 text-center text-xs'>{userYT}</p>
                </div>

                <div className='mt-5'>
                    <p className='text-white text-5xl text-center font-semibold'>{friendsYT}</p>
                    <p className='text-gray-400 text-xl text-center font-extralight pt-1 pr-1'>Subscribers</p>
                </div>
                
                <div className='flex flex-row place-self-center gap-1'>
                    <img src={downIcon} className='self-center' alt="Up Icon" />  
                    <p className='text-red-500 text-[.5rem] text-center mt-5 pr-2 pb-5'>{todayYT} Today</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default MainRowCards