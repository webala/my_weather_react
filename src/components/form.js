const Form = ({region, setRegion, handleSubmit}) => {
    return (<div id='form'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={region} onChange={(e)=>setRegion(e.target.value)} id='region' placeholder='Country or Region' required/>
            <button type='submit' className='btn'>Get weather</button>
        </form>
    </div>)
}

export default Form;