const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Muestra un mensaje de "Enviando"
    toast({
      title: "Enviando...",
      description: "Por favor, espera un momento.",
    });

    const response = await fetch("https://script.google.com/macros/s/AKfycbyUYDikN_qure3KM-ZLMYsHQbHCMOgcDi7vIGd5Zq6gtpolY8xL0xkF9zAfYNXVbhU6/exec", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    
    // El formulario se enviará correctamente sin errores de CORS
    toast({
      title: "¡Solicitud enviada correctamente!",
      description: "Hemos recibido tu solicitud de presupuesto. Te contactaremos en las próximas 24 horas.",
    });
    form.reset();

  } catch (error) {
    toast({
      title: "Error al enviar",
      description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      variant: "destructive",
    });
  }
};
