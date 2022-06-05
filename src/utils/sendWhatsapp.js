
const sendWhatsapp = (link) => {
 if (link) {
  window.Linking.canOpenURL(link)
   .then(supported => {
     if (!supported) {
      window.alert(
        'Please install whats app to send direct message to students via whats app'
      );
    } else {
      return window.openURL(link);
    }
  })
  .catch(err => console.error('An error occurred', err));
} else {
  console.log('sendWhatsAppMessage -----> ', 'message link is undefined');
 }
};

export default sendWhatsapp;