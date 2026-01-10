export const handleWhatsAppClick = () => {
  const phoneNumber = "50489502917";
  const message = "Hola, me interesa una consultoría con MANU.OS";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // En celular, usa el enlace universal para abrir la App
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  } else {
    // En PC, fuerza WhatsApp Web
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  }
};

export const handleWhatsAppDevelopmentClick = () => {
  const phoneNumber = "50489502917";
  const message = "Hola, quiero discutir un proyecto de desarrollo";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  } else {
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  }
};
