import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:string,
  placeholder?:string,
  changeField:(param:any)=>any,
}

const InputText:React.FC<Props> = ({name, value, placeholder, changeField}) => {
  return (
    <input 
      className={name==='date'?'textInput date':'textInput'}
      type={name} 
      // value={value} 
      placeholder={placeholder} 
      onChange={(event)=>{changeField(event);}} 
    />
  ); 
}; 

InputText.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  placeholder:PropTypes.string,
  changeField:PropTypes.func.isRequired,
};
export default InputText;