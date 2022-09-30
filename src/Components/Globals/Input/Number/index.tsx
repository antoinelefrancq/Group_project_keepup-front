import PropTypes from 'prop-types';

interface Props{
  value:number|undefined;
  placeholder:string
  changeField:(param:number)=>void
}

const InputNumber:React.FC<Props> = ({value, placeholder, changeField}) => {
  return (
    <input className='textInput'  type='number' value={value}       placeholder={placeholder} 
      onChange={(event)=>{changeField(Number(event.target.value));}} />
  ); 
}; 

InputNumber.propTypes ={
  value:PropTypes.number,
  placeholder:PropTypes.string.isRequired,
  changeField:PropTypes.func.isRequired,
};
export default InputNumber;