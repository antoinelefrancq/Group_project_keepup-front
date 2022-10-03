import PropTypes from 'prop-types';

interface Props{
  value:string,
  id:string
  radioState:string,
  changeField:(param:string)=>void
}

const InputRadio:React.FC<Props> = ({value,  id, radioState, changeField}) => {
  return (
    <input 
      className={'textInput'} 
      id={id} 
      type='radio' 
      value={value} 
      onChange={(event)=>{changeField(event.target.value);}} 
      checked={radioState===value?true:false} />
  ); 
}; 

InputRadio.propTypes ={
  value:PropTypes.any.isRequired,
  changeField:PropTypes.func.isRequired,
  radioState:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
};
export default InputRadio;