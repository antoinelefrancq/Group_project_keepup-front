import PropTypes from 'prop-types';
import {ChangeEvent} from 'react';

interface Props{
  name:string
  value:number|'';
  placeholder:string
  changeField:(param:ChangeEvent<HTMLInputElement>)=>void
}

const InputNumber:React.FC<Props> = ({value, name, placeholder, changeField}) => {
  return (
    <input className='textInput'  name={name} type='number' value={value} placeholder={placeholder} 
      onChange={(event)=>{changeField(event);}} />
  ); 
}; 

InputNumber.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.any,
  placeholder:PropTypes.string.isRequired,
  changeField:PropTypes.func.isRequired,
};
export default InputNumber;