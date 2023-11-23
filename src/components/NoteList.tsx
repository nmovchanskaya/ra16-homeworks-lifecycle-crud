import { NoteType } from "./NoteType";

export const NoteList = (props: {notes: NoteType[], onDelete: (id: number) => void}) => {

    const {notes, onDelete} = props;
  
    return (
        <>
            {notes.map((item: NoteType) => {
                return (
                    <div className="note" key={item.id}>
                        <div className="id hidden">
                            {item.id}
                        </div>
                        <div className="note_content">
                            {item.content}
                        </div>
                        <div className="note_del">
                            <button className="note_del_btn" onClick={() => {onDelete(item.id)}}>
                                x
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}