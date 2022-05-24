console.log(1)
import { Dialog } from '@capacitor/dialog';

const showAlert = async () => {
  await Dialog.alert({
    title: 'Stop',
    message: 'this is an error',
  });
};
console.log("insets")
//console.log(GetSafeArea())
showAlert()