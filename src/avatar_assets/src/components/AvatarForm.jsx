import React, { useState } from 'react'
import { avatar } from "../../../declarations/avatar";

function AvatarForm() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    // do something
      let options = { name, lastname, age, country };
      console.log('Waiting for backend canister', options)
    // use the avatar interface delclaration
  }
  
  return (
      <div>
        <div className="bg-gray-800 text-gray-100 h-screen p-10">
              <h2 className="text-red-500 text-center font-semibold text-2xl">Internet Computer Avatar</h2>
              <form onSubmit={ handleSubmit } className="my-12 mx-auto bg-gray-600 shadow-md rounded-md p-5 max-w-md">
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="Last Name">Last Name</label>
                    <input type="text" value={lastname} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="Age">Age</label>
                    <input type="text" value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="Country">Country</label>
                    <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
                </div>
                <div className="input-field">
                    <button className="btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AvatarForm