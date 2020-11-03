const user = {
    "nombre": "Jose",
    "username": "Jose17SV",
    "password": "1234",
    "channel": "JoseRadio",
    "fechaNacimiento": "2000",
}
export const EditUserProfile = () => {

    return (
        <>
            <div className="profile-picture-box">
                <img src="https://via.placeholder.com/150" alt="imagen" />
                <button>Change Pfp</button>
            </div>
            <label id="name-label">Nombre Completo</label><br/>
            <input type="text" class="text-input" id="name" name="name" placeholder={user.nombre}></input><br/>
            <label id="fecha-label">Fecha de nacimiento</label><br/>
            <input type="date" class="text-input" id="name" name="name"></input><br/>
            <label id="password-label">Password</label><br/>
            <input type="text" class="text-input" id="name" name="name" placeholder={user.password}></input><br/>

        </>
    )
}
