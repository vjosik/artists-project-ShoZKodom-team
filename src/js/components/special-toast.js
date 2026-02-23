import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function examplTost({
  name = 'Error',
  message = 'horrrrooooor!',
} = error) {
  iziToast.show({
    title: name,
    message: message,
    position: 'topCenter', //'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  });
}
