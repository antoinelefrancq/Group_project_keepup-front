import PropTypes from 'prop-types';

interface Props{
  name:string,
  value:any;
  id?:string;
}

const InputRadio:React.FC<Props> = ({name, value,id}) => {
  return (
    <input className='textInput' type={name} value={value} id={id?id:undefined} />
  ); 
}; 

InputRadio.propTypes ={
  name:PropTypes.string.isRequired,
  value:PropTypes.any.isRequired,
  id:PropTypes.string,
};
export default InputRadio;