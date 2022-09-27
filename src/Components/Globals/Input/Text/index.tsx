import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:any,
  placeholder:string,
  changeField:(param:any)=>void
}

const InputText:React.FC<Props> = ({name, value, placeholder, changeField}) => {
  console.log(value);
  return (
    <input className='textInput' type={name} value={value} placeholder={placeholder} onChange={(event)=>changeField(event.target.value)} />
  ); 
}; 

InputText.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.any.isRequired,
  placeholder:PropTypes.string.isRequired,

  changeField:PropTypes.func.isRequired
};
export default InputText;