import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:any,
  placeholder?:string,
  id?:string
  radioState?:any,
  changeField:(param:any)=>void
}

const InputText:React.FC<Props> = ({name, value, placeholder, id, radioState, changeField}) => {
  return (
    <input 
      className={name==='date'?'textInput date':'textInput'} 
      id={id?id:undefined} 
      type={name} 
      value={value} 
      placeholder={placeholder} 
      onChange={(event)=>{changeField(event.target.value);}} 
      checked={radioState===value?true:false} />
  ); 
}; 

InputText.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.any.isRequired,
  placeholder:PropTypes.string,
  changeField:PropTypes.func.isRequired,
  radioState:PropTypes.any,
  id:PropTypes.string,
};
export default InputText;