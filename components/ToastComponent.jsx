import Toast from 'react-bootstrap/Toast';

export function ToastComponent({hidden, setHidden}) {
  return (
    <Toast className="toast-component"  hidden={hidden} onClose={()=>{setHidden(!hidden)}}>
      <Toast.Header></Toast.Header>
      <Toast.Body>No se encontro el canal deseado</Toast.Body>
    </Toast>
  );
}

