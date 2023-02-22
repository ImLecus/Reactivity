import Note from "./note"
export default function NoteList(){
    return(
        <div id="noteList">
            <Note text="esto es una nota probablemente demasiado grande, debería soltar un error, pero voy a seguir escribiendo a ver cuánto debería ocupar una nota ideal. Creo que ya me estoy acercando a un resultado digno de testeo, ánimo Marcos!" emoScore="excellent"/>
            <Note text="esto es una nota" emoScore="good" date={new Date().getDate().toString() + "/" + new Date().getMonth().toString()}/>
            <Note text="esto es una nota" emoScore="mid"/>
            <Note text="esto es una nota" emoScore="bad"/>
            <Note text="esto es una nota" emoScore="awful"/>
            <Note text="esto es una nota" emoScore="mid"/>
            <Note text="esto es una nota" emoScore="bad"/>
            <div className="journalFooter">
                <button><img src="./plus.svg"/><p>Añadir nueva entrada</p></button>
                <p>¡Vuelve mañana para escribir una nueva entrada en el diario!</p>
            </div>
        </div>
    )
}