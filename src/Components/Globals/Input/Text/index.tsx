import PropTypes from 'prop-types';

interface Props{
  type:string,
  name:string,
  value:string,
  placeholder?:string,
  changeField:(param:any)=>void
}

const InputText:React.FC<Props> = ({type, name, value, placeholder, changeField}) => {
  return (
    <input 
      className={type==='date'?'textInput date':'textInput'}
      name={name}
      type={type} 
      value={value} 
      placeholder={placeholder} 
      onChange={(event)=>{changeField(event);}} 
    />
  ); 
}; 

InputText.propTypes ={
  type:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  changeField:PropTypes.func.isRequired,
};
export default InputText;