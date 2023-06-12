import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleConfirm = (e) => {
        e.preventDefault()
        
        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    
    }
    
    
    return (
      <div className="container">
        <form onSubmit={handleConfirm} className="Form">
          <label>
            Nombre
            <input
              type="text"
              name='name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label>
            Telefono
            <input
              type="text"
              name='phone'
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    );

}


export {CheckoutForm}