const Form = () => {
    return (<div id='form'>
        <form>
            <input type='text' name='region' id='region' placeholder='Country or Region'/>
            <button type='submit' class='btn'>Get weather</button>
        </form>
    </div>)
}

export default Form;