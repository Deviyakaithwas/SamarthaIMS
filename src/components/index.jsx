import { useState } from "react"
const Dashboard = () => {


    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [supplierinfo, setsupplierinfo] = useState('')
    const [mfgDate, setmfgDate] = useState('')
    const [items, setitems] = useState([])


    const forSubmitHandler = async event => {

        event.preventDefault();
        const itemObject = {
            name, price, supplierinfo, mfgDate
        }

        const item = await fetch('http://loclahost:5000/item/add', {
            method: 'POST',
            body: JSON.stringify(itemObject),
            headers: { 'Content-Type': 'application/json' }
        })

        if (itemResponse.status === 200) {
            const item = await itemResponse.json()
            setitems(items => [item.data, ...items])
        }

    }
   


    return <div>
        <h1>Add inventory element</h1>
        <form onSubmit={forSubmitHandler} >


            <div>
                <label htmlfor="name">Name:-</label>
                <input id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>

            <div>
                <label htmlfor="price">Price:-</label>
                <input id="price" value={name} onChange={event => setPrice(event.target.value)} />
            </div>

            <div>
                <label htmlfor="supplierinfo">supplierinfo:-</label>
                <input id="nsupplierinfo" value={name} onChange={event => setSupplierinfo(event.target.value)} />
            </div>

            <div>
                <label htmlfor="mfgDate">mfgDate:-</label>
                <input id="nmfgDate" value={name} onChange={event => setmfgDate(event.target.value)} />
            </div>

            <div>
                <button type="submit">Submit</button>
                <button>Reset </button>
            </div>
        </form>

        <h1>items List</h1>
        <ul>
            {items.map(item => <li>{item.name} </li>)}
        </ul>

    </div>


}

export default dashboard