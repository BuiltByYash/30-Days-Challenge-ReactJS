import { useState, useEffect } from "react"

const HotelForm = ({ sendToApp, editData }) => {

    const [user, setUser] = useState({
        id: '',
        uName: '',
        mobile: '',
        email: '',
        adults: '',
        infants: '',
        Room: '',
        Desc: ''
    })

    useEffect(() => {
        if (editData) {
            setUser(editData)
        }
    }, [editData])

    const handleform = (u) => {
        let { name, value } = u.target;
        setUser({ ...user, [name]: value })
    }

    const submitform = (u) => {
        u.preventDefault();

        sendToApp(user)

        setUser({
            id: '',
            uName: '',
            mobile: '',
            email: '',
            adults: '',
            infants: '',
            Room: '',
            Desc: ''
        })
    }

    return (
        <div>
            <center>
                <form onSubmit={submitform}>
                    ID: <input type="number" name="id" value={user.id} onChange={handleform} placeholder="Enter ID" required /><br /><br />

                    Name: <input type="text" name="uName" value={user.uName} onChange={handleform} placeholder="Enter Name" required /><br /><br />

                    Mobile: <input type="number" name="mobile" value={user.mobile} onChange={handleform} placeholder="Enter Mobile Number" required /><br /><br />

                    Email: <input type="text" name="email" value={user.email} onChange={handleform} placeholder="Enter Email Address" required /><br /><br />

                    Adults: <input type="number" name="adults" value={user.adults} onChange={handleform} placeholder="Enter Number of Adults" required /><br /><br />

                    Infants: <input type="number" name="infants" value={user.infants} onChange={handleform} placeholder="Enter Number of Infants" required /><br /><br />

                    Room: <input type="number" name="Room" value={user.Room} onChange={handleform} placeholder="Enter Number of Rooms" required /><br /><br />

                    Desc: <input type="text" name="Desc" value={user.Desc} onChange={handleform} placeholder="Enter Description" required /><br /><br />

                    <button>
                        {editData ? "Update" : "Add"}
                    </button>

                    <br /><br />
                </form>
            </center>
        </div>
    )
}

export default HotelForm