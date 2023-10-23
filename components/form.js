'use client'
import { useState } from 'react';
import Select from 'react-select';
import { useInput } from '../hooks/useInput';
import InputMask from 'react-input-mask'
import Image from 'next/image';
import Check from './check.svg?url'

const options = [
    { value: 'junior', label: 'Junior' },
    { value: 'middle', label: 'Middle' },
    { value: 'senior', label: 'Senior' },
    { value: 'lead', label: 'Lead' },
    { value: 'cto', label: 'CTO' },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "64px",
      border: "1px solid #e2e8f0",
      borderRadius:'16px',
      zIndex:'100',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      lineHeight: "1.3",
      color: "#718096",
      fontFamily: "Arboria-Book",
      background: "transparent", 
      fontWeight: state.isSelected ? "bold" : "normal",
      zIndex:'100',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      lineHeight: "1.3",
      color: "#718096",
      fontFamily: "Arboria-Book",
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Arboria-Book",
      fontWeight: state.isSelected ? "bold" : "normal",
      background: "transparent", 
      color:'rgb(3 7 18 / var(--tw-text-opacity))',
      zIndex:'100',

    }),
  };

  
  
export default function Form({ showRef }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const [name,setName] = useInput("")
    const [phone,setPhone] = useInput("")
    const [email,setEmail] = useInput("")
    const [skill,setSkill] = useInput("")
    const [check, setCheck] = useState(false)

    const [checkName, setCheckcheckName] = useState(false)
    const [checkPhone, setCheckPhone] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)


    const handleSubmit = (event) => {
      event.preventDefault()

      if(name=="")
        setCheckcheckName(true)
      else
        setCheckcheckName(false)
      if(phone=="")
        setCheckPhone(true)
      else
        setCheckPhone(false)
      if(email=="")
        setCheckEmail(true)
      else
        setCheckEmail(false)

      if(name!=="" && phone!=="" && email!=="")
        console.log(
          JSON.stringify({
            name: name,
            phone: phone,
            email:email,
            skill:skill,
            check:check,
          })
        )     
    }
  
    return (
      <div className="fixed top-0 left-0 right-0 w-full h-full bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div ref={showRef} className="bg-white rounded-3xl p-10 w-[640px] relative flex flex-col gap-8 transform translate-y-1/2 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl leading-44 text-gray-950 font-arboriaMedium">Drop us a line</h1>
            <p className="text-xl leading-30 text-gray-700 font-arboriaBook">
              Our documentary campaigns feature leading figures, organizations, and leaders, in open and candid discussions.
            </p>
          </div>
          <form action="" className="w-full flex flex-col gap-6" onSubmit={(event) => handleSubmit(event)}>
            <div className="flex flex-col gap-4">
              <div>
                 <input value={name} type='text' onChange={(e)=>setName(e.target.value)}  placeholder="Name" className={` ${checkName? ' border-red ': ' border-gray-200 '}h-16 w-full px-5 border  text-lg leading-26 font-arboriaBook rounded-2xl`} />
                {checkName? <p className='text-base leading-24 text-red font-arboriaBook'>Error</p>:''}
              </div>
             
              <div className="flex gap-4  w-full">
                <div className=' w-full'>
                  <InputMask mask="+7(999)-999-99-99" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" className={`${checkPhone? ' border-red ': ' w-full border-gray-200 '} h-16 w-full px-5 border border-gray-200 text-lg leading-26 font-arboriaBook rounded-2xl`} />
                  {checkPhone? <p className='text-base leading-24 text-red font-arboriaBook'>Error</p>:''}
                </div>
                <div className=' w-full'>
                  <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className={`${checkEmail ? ' border-red ': '  w-full border-gray-200 '}h-16 w-full px-5 border text-lg leading-26 font-arboriaBook rounded-2xl`} />
                  {checkEmail? <p className='text-base leading-24 text-red font-arboriaBook'>Error</p>:''}
                </div>  
              </div> 
                <Select
                    defaultValue={selectedOption}
                    options={options}
                    placeholder='Your skill'
                    styles={customStyles}
                    onChange={(selectedValue) => {
                      setSelectedOption(selectedValue);
                      setSkill(selectedValue.value);
                    }}
                    z
                />
            </div>
            <div className="flex gap-4 items-center">
              <div className='relative flex items-center'>
                <input onChange={(e)=>{setCheck(e.target.checked)}} value={check} type="checkbox" name="" id="" className=" z-10 appearance-none checked:border-blue-600  text-blue-600 w-6 h-6 border boder-gray-200 rounded-lg border-solid " />
                {check ? <Image src={Check} alt='check' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0' /> :''}
              </div>          
              <p className="text-lg leading-26 text-gray-700 font-arboriaBook">
                I’m agree with every data you collect
              </p>
            </div>
            <button className="rounded-fullA bg-blue-600 px-10 h-16 text-white text-xl font-arboriaMedium rounded-full">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
  