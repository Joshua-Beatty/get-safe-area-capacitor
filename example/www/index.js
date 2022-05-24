console.log(1)
const { GetSafeArea } = Capacitor.Plugins;
/*
const showAlert = async () => {
  await Dialog.alert({
    title: 'Stop',
    message: 'this is an error',
  });
};*/
console.log("insets")
GetSafeArea.getSafeArea().then((e)=>{console.log( e)})

//showAlert()