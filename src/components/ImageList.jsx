import React , {useState,useContext} from 'react'
import { GlobalState } from '../context/GlobalContext'
export default function ImageList() {
    const {data , searchTerm ,setOption }= useContext(GlobalState)
    const items = data ? data.hits : [];
    let [term , setTerm] = useState('');
    
    return (
        <>     
            <h2 className="bg-teal-500 text-center p-6">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input className='rounded-lg py-3 px-2' onChange={(e)=>{setTerm(e.target.value)}} type="text" name="" placeholder='search'/>
                    <button className='ml-3 rounded-lg bg-teal-700 py-3 px-2 text-white uppercase font-bold' onClick={()=>searchTerm(term)}>enter</button>
                </form>
                <div className='pt-4'>
                    <button className='ml-3 rounded-lg bg-teal-700 py-3 px-2 text-white uppercase font-bold' onClick={()=>setOption('popular')}>popular</button>
                    <button className='ml-3 rounded-lg bg-teal-700 py-3 px-2 text-white uppercase font-bold' onClick={()=>setOption('latest')}>latest</button>
                </div>
            </h2>
            <div className='container mx-auto flex justify-center flex-wrap gap-3 p-4'>  
                {items.length > 0 ? items.map(item=>(
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-fit">
                    <img src={item.webformatURL} alt="" className="w-full"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-teal-500 text-xl mb-2">
                            Photo by {item.user}
                        </div>
                        </div>
                        <ul className='px-6 py-3'>
                            <li className='font-bold capitalize'>likes: {item.likes}</li>
                            <li className='font-bold capitalize '>views: {item.views}</li>
                            <li className='font-bold capitalize'>downloads: {item.downloads}</li>
                        </ul>
                        <div className="px-6 py-4">
                        {
                            item.tags.split(',').map(tag=>(
                                <span className="inline-block bg-gray-200 mt-1 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    #{tag}
                                </span>
                            ))
                        }
                        </div>
                    </div>
                )) :<h2 className='py-3 text-center font-extrabold text-2xl'>Image not found</h2>}
            </div>
            
        </>
    )
}
