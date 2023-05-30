import {  useState} from "react";

const CheckoutForm = ({onConfirm}) =>{
    const [name, setName] = useState ("")
    const [phone, setPhone] = useState ("")
    const [email, setEmail] = useState ("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm( userData)

    }

    return(
        <div className="Container">
          <form onSubmit={handleConfirm} className="Form">
            <label className="Label">
                Nombre
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={({target}) => setName(target.value)}
                  />
            </label>
            <label className="Label">
                Telefono
                <input
                  className="input"
                  type="number"
                  value={phone}
                  onChange={({target}) => setPhone(target.value)}
                  />
            </label>
            <label className="Label">
                Email
                <input
                  className="input"
                  type="email"
                  value={email}
                  onChange={({target}) => setEmail(target.value)}
                  />
            </label>
            <div className="Label">
                <button type="submit" className="Button">Crear Orden</button>
            </div>
          </form>
        </div>
    )

}

export default CheckoutForm