import { React, useState, useEffect } from 'react'
import facebookIcon from '../assets/icon-facebook.svg' 
import twitterIcon from '../assets/icon-twitter.svg' 
import instagramIcon from '../assets/icon-instagram.svg' 
import youtubeIcon from '../assets/icon-youtube.svg'
import upIcon from '../assets/icon-up.svg'
import downIcon from '../assets/icon-down.svg'
import { dashData } from '../services/DataServices'

const OverviewTodayCards = () => {
    const [viewsFB, setViewsFB] = useState("");
    const [likesFB, setLikesFB] = useState("");

    const [viewsX, setViewsX] = useState("");
    const [likesX, setLikesX] = useState("");

    const [viewsIG, setViewsIG] = useState("");
    const [likesIG, setLikesIG] = useState("");

    const [viewsYT, setViewsYT] = useState("");
    const [likesYT, setLikesYT] = useState("");
    
    useEffect(() => {
        const getData = async () => {
            const mediaInfo = await dashData();
            console.log(mediaInfo.media);
    
            setViewsFB(mediaInfo.media.facebook[0].views);
            setLikesFB(mediaInfo.media.facebook[0].likes);
    
            setViewsX(mediaInfo.media.twitter[0].retweets);
            setLikesX(mediaInfo.media.twitter[0].likes);
    
            setViewsIG(mediaInfo.media.instagram[0].views);
            setLikesIG(mediaInfo.media.instagram[0].likes);

    
            setViewsYT(mediaInfo.media.youtube[0].views);
            setLikesYT(mediaInfo.media.youtube[0].likes);

        }
    
        getData();
    
    }, [])

  return (
    <>
        <div className='grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-8 mt-3 place-self-center'>
            {/* facebook */}
            <div className='col-start-1 row-start-1 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Page Views</p>
                    <img src={facebookIcon} className='w-[1rem] h-[1rem]' alt="Facebook Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{viewsFB}</p>
                    <img src={upIcon} className='self-end pl-36 pb-1' alt="Up Icon" />
                    <p className='text-green-500 text-xs text-center self-end pr-2'>3%</p>
                </div>
            </div>

            <div className='col-start-2 row-start-1 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Likes</p>
                    <img src={facebookIcon} className='w-[1rem] h-[1rem]' alt="Facebook Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{likesFB}</p>
                    <img src={downIcon} className='self-end pl-36 pb-1' alt="Down Icon" />
                    <p className='text-red-500 text-xs text-center self-end pr-2'>2%</p>
                </div>
            </div>

            {/* twitter */}
            <div className='col-start-1 row-start-2 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Retweets</p>
                    <img src={twitterIcon} className='w-[1rem] h-[1rem]' alt="Twitter Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{viewsX}</p>
                    <img src={upIcon} className='self-end pl-32 pb-1' alt="Up Icon" />
                    <p className='text-green-500 text-xs text-center self-end pr-2'>303%</p>
                </div>
            </div>

            <div className='col-start-2 row-start-2 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Likes</p>
                    <img src={twitterIcon} className='w-[1rem] h-[1rem]' alt="Twitter Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{likesX}</p>
                    <img src={upIcon} className='self-end pl-32 pb-1' alt="Up Icon" />
                    <p className='text-green-500 text-xs text-center self-end pr-2'>553%</p>
                </div>
            </div>

            {/* instagram */}
            <div className='col-start-4 row-start-1 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Profile Views</p>
                    <img src={instagramIcon} className='w-[1rem] h-[1rem]' alt="Instagram Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{viewsIG}</p>
                    <img src={upIcon} className='self-end pl-28 pb-1' alt="Up Icon" />
                    <p className='text-green-500 text-xs text-center self-end pr-2'>1375%</p>
                </div>
            </div>

            <div className='col-start-3 row-start-1 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Likes</p>
                    <img src={instagramIcon} className='w-[1rem] h-[1rem]' alt="Instagram Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{likesIG}</p>
                    <img src={upIcon} className='self-end pl-24 pb-1' alt="Up Icon" />
                    <p className='text-green-500 text-xs text-center self-end pr-2'>2257%</p>
                </div>
            </div>
            
            {/* youtube */}
            <div className='col-start-4 row-start-2 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Total Views</p>
                    <img src={youtubeIcon} className='w-[1rem] h-[1rem]' alt="Youtube Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{viewsYT}</p>
                    <img src={downIcon} className='self-end pl-28 pb-1' alt="Down Icon" />
                    <p className='text-red-500 text-xs text-center self-end pr-2'>12%</p>
                </div>
            </div>

            <div className='col-start-3 row-start-2 bg-gray-800 w-[14.5rem] h-[7rem] rounded-[0.25rem]'>
                <div className='mt-5 flex flex-row justify-between pl-5 pr-5'>
                    <p className='text-gray-400 text-center text-xs'>Likes</p>
                    <img src={youtubeIcon} className='w-[1rem] h-[1rem]' alt="Youtube Icon" />
                </div>

                <div className='mt-2 flex flex-row justify-between pt-4 pl-2 pr-2'>
                    <p className='text-white text-3xl text-center'>{likesYT}</p>
                    <img src={downIcon} className='self-end pl-28 pb-1' alt="Down Icon" />
                    <p className='text-red-500 text-xs text-center self-end pr-2'>19%</p>
                </div>
            </div>   
        </div>
    </>
  )
}

export default OverviewTodayCards