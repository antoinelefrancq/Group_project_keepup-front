/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:string,
  id:string
  radioState:string,
  changeField:(param:any)=>void
}

const InputRadio:React.FC<Props> = ({value, name, id, radioState, changeField}) => {
  return (
    <input
      name={name} 
      className={'textInput'} 
      id={id} 
      type='radio' 
      value={value} 
      onChange={(event)=>{changeField(event);}} 
      checked={radioState===value?true:false} />
  ); 
}; 

InputRadio.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.any.isRequired,
  changeField:PropTypes.func.isRequired,
  radioState:PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
};
export default InputRadio;