
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'

import { CreateAdModal } from './components/CreateAdModal'
import { GamerBannerMap } from './components/GameBannerMap';


interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}


function App() {
   
 
 return (
 
 <div className="max-w-[1250px] mx-auto flex flex-col items-center my-20 flex-nowrap">
    <img src={logoImg }alt="" />

    <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span>  está aqui.</h1>

    
        
    <GamerBannerMap />
 
   
        <Dialog.Root>
            <CreateAdBanner />
            <CreateAdModal />
        </Dialog.Root>
    

 </div>
 )
}

export default App
