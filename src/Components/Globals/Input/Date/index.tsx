import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:string,
  changeField:(param:any)=>void
}

const InputDate:React.FC<Props> = ({name, value, changeField}) => {
  return (
    <input 
      className='textInput'
      type={name} 
      value={(value)} 
      onChange={(event)=>{changeField((event.target.value));}} 
    />
  ); 
}; 

InputDate.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  changeField:PropTypes.func.isRequired,
};
export default InputDate;