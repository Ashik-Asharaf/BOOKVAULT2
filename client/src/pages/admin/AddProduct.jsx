import React, { useState } from 'react'
import upload_icon from "../../assets/upload_icon.png"


const AddProduct = () => {

    const [files, setFiles] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("100")
    const [category, setCategory] = useState("Academic")
    const [offerPrice, setOfferPrice] = useState("100")
    const [popular, setPopPlar] = useState(false)

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }


  return (
    <div className='px-2 sm:px-6 py-12 m-2 h-[97vh] bg-primary overflow-scroll w-full lg:w-4/5 rounded-xl'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-y-3 medium-14'>
        <div className='w-full'>
          <h5 className='h5'>Product Name</h5>
          <input type="text" 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder='Write here...'
          className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl'
          />
        </div>
         <div className='w-full'>
          <h5 className='h5'>Product Description</h5>
          <textarea 
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          type="text"
          rows={5}
          placeholder='Write here...'
          className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl'
          />
        </div>
        <div>
          <div className='flex gap-4'>
            <div>
              <h5 className="h5">Product Category</h5>
              <select onChange={(e)=>setCategory(e.target.value)}  className='px-3 py-2  ring-1 text-gray-500 ring-slate-900/5 rounded bg-white mt-1 max-w-30'>
                <option value="Academic">Academic</option>
                <option value="Children">Children</option>
                <option value="Health">Health</option>
                <option value="Horror">Horror</option>
                <option value="Business">Business</option>
                <option value="History">History</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div>
              <h5 className='h5'>Product Price</h5>
              <input type="number" 
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
              placeholder='100'
              className='px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 max-w-28'
              />
            </div>
            <div>
              <h5 className='h5'> OfferPrice</h5>
              <input type="number" 
              onChange={(e)=>setOfferPrice(e.target.value)}
              value={offerPrice}
              placeholder='100'
              className='px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 max-w-28'
              />
          </div>
          </div>
        </div>
        {/* IMAGES */}
        <div className='flex gap-2 mt-2'>
          {Array(4).fill("").map((_,index)=>(
            <label htmlFor={`image${index}`} className='ring-1 ring-slate-900/10 overflow-hidden rounded'>
               <div>
              <input  
              onChange={(e)=>{
              const updateFiles = [...files]
              updateFiles[index]=e.target.files[0]
              setFiles()
              }}
              type='file'
              id={`image=${index}`}
              hidden
              
              />
              <img src={
                files[index ] ? URL.createObjectURL(files[index]) : upload_icon
              } alt='UploadArea' height={67} width={67} className='bg-white overflow-hidden aspect-square object-cover ' />
          </div>
            </label>
          ))}
        </div>
        <div className='flexStart gap-2 mt-2'>
              <input type="checkbox" 
              onChange={()=>setPopular(prev=>!prev)}
              checked={popular}
              id='popular'
              />
              <label htmlFor="popular" className='cursor-pointer'>Add to Popular</label>
        </div>
        <button type="submit" className='btn-dark mt-3 max-w-44 sm:w-full rounded'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct