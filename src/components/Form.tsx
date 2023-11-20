export const Form = (props: {
    addNote: React.MouseEventHandler, 
    setForm: React.Dispatch<React.SetStateAction<{
        content: string;
    }>>, 
    form: {
        content: string;
    }
}) => {

const {addNote, setForm, form} = props;

const handlerInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
}

return (
    <form onSubmit={event => event.preventDefault} className="addform">
        <textarea 
            className="addform__input"
            name="content"
            placeholder="Note" 
            value={form.content}
            onChange={handlerInputChange} 
        />
        <button type="submit" className="addform__submit" onClick={addNote}>Add</button>
    </form>
)
}
