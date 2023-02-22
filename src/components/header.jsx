import { useState } from "react"

export default function Header(){
    let [sidebarOn,setSidebar] = useState("false")
    return(
        <>
            <header>
                <button onClick={() => {setSidebar("true")}}>
                    <img src="./menu.svg"/>
                </button>
                Diario
            </header>
            <aside className={"isOpen:"+sidebarOn}>
                <div className="content">
                   <div id="userProfile">
                    <img width={50} height={50}/>
                    <div>
                        <h3>Username</h3>
                        <a>Ver perfil</a>
                    </div>
                    </div>
                    <ul className="buttons">
                        <li><button onClick={() => {setSidebar("false")}}>Estadísticas<img src="./stats.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Calendario <img src="./calendar.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Agenda <img src="./book.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Diario <img src="./diary.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Ejercicio <img src="./run.svg"/></button></li>
                    </ul>
                    <ul className="buttons">
                        <li><button onClick={() => {setSidebar("false")}}>Configuración<img src="./settings.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Logros <img src="./achievements.svg"/></button></li>
                        <li><button onClick={() => {setSidebar("false")}}>Cerrar sesión<img src="./logout.svg"/></button></li>
                    </ul>
                    
                </div>
                <button id="space" onClick={() => {setSidebar("false")}}></button>
            </aside>
        </>
        
    )
}