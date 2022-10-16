import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';

const items = [
  { icon: 'fab fa-spotify', link: 'https://open.spotify.com/user/xatjaetgs3f5zqzih7pna1ngi?si=63385ac8d5fc4b06' },
  { icon: 'fab fa-instagram', link: 'https://www.instagram.com/_.ruzgar.35/' },
  { icon: 'fab fa-github', link: 'https://github.com/agony01' },
  { icon: 'fab fa-discord', link: 'https://discord.com/users/678644139197333525' },
]

export default function Home() {
 
  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Rüzgar
                </p>
                  <Tippy content={`Online`} animation="shift-away" arrow={false}>
                    <span className={`ml-2 text-online px-2 py-1 font-normal rounded-md text-sm`}>
                          <i className={`fa fa-circle text-online mr-2`} />Yaşıyor
                    </span>
                  </Tippy>
            
                </div>
                <p className="text-white/50 text-md mt-3">
                Merhaba ben Rüzgar, 17 yaşımdayım istanbul'da yaşıyorum makine tasarım bölümünde okuyorum.
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="Rüzgar" src={`https://cdn.discordapp.com/attachments/678652755652509697/1031224290105888779/IMG-20221013-WA0009.jpg`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
                <div className={`bg-[#040404] rounded-full px-[4px] py-[1px] flex items-center absolute bottom-0 right-4`}>
                  <Tippy content="Online" animation="shift-away" arrow={false}>
                    <i className={`fad fa-circle text-2xl text-online`} />
                  </Tippy>
                </div>
              </div>
              
            </div>
            <br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">insan</span>
          </div>
      
      </div>
    </>
  )
}
