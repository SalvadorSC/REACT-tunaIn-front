import './userProfile.css'
const user = {
    "nombre": "Jose",
    "username": "Jose17SV",
    "password": "1234",
    "channel": "JoseRadio",
    "fechaNacimiento" : "2000",
}
export const Userprofile = () => {
    //const [canales, setCanales] = useState("No tienes ningún canal")
    
    return (
        //setCanales(user.channel),
        <>
            <h3>Nombre completo</h3><hr></hr>
            <h3>{user.nombre}</h3>
            <h2>Canales</h2><hr></hr>
            <h3>{user.channel}</h3>
            <h3>Fecha de nacimiento </h3><hr></hr>
            <h4>{user.fechaNacimiento}</h4>

        </>
    )
}
