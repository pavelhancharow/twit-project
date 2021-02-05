import './post-add-form.sass'

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hello')}>
        Добавить</button>
    </div>
  )
}

export default PostAddForm;