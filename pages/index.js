import { useState, useEffect } from 'react'
import Action from '../components/header/Action'
import NavMenu from '../components/header/NavMenu'
import Profile from '../components/header/Profile'
import GenQR from '../components/header/GenQR'
import SearchBar from '../components/home/SearchBar'
import NewTransactionModal from '../components/transaction/NewTransactionModal'
import TransactionsList from '../components/transaction/TransactionsList'
import { useWallet } from '@solana/wallet-adapter-react'
import TransactionQRModal from '../components/transaction/TransactionQRModal'
import { useTracoin } from '../hooks/tracoin'



const Home = () => {
    const { connected, publicKey } = useWallet()
    const [transactionQRModalOpen, setTransactionQRModalOpen] = useState(false)
    const [qrCode, setQrCode] = useState(false)


    const { avatar, userAddress, doTransaction, transactions, setNewTransactionModalOpen, newTransactionModalOpen } = useTracoin()

    return (
        <div className="flex min-h-screen ">
            <header className="flex w-[250px] flex-col bg-gradient-to-b from-yellow to-blue  p-12">
                {/* <Profile setModalOpen={setTransactionQRModalOpen} avatar={avatar} userAddress={userAddress} setQrCode={setQrCode} /> */}
                <div className='my-10px mb-10'>
                    <div className="flex cursor-pointer flex-col items-center space-y-3">
                       <div className="h-26 w-26 rounded-lg border-2 border-white">
                           <img className="h-full w-full rounded-lg object-cover" src="logo.png" />
                       </div>
                   </div>
                </div>

                

                <Action setModalOpen={setNewTransactionModalOpen} />
                <NewTransactionModal modalOpen={newTransactionModalOpen} setModalOpen={setNewTransactionModalOpen} addTransaction={doTransaction} />
                <GenQR setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} setQrCode={setQrCode}/>
                <TransactionQRModal modalOpen={transactionQRModalOpen} setModalOpen={setTransactionQRModalOpen} userAddress={userAddress} setQrCode={setQrCode} myKey={publicKey} />
                <NavMenu connected={connected} publicKey={publicKey} />
            </header>

            <main className="flex flex-1 flex-col bg-[#171c59]">
                

                <TransactionsList connected={connected} transactions={transactions} />
                
            </main>
        </div>
    )
}

export default Home
