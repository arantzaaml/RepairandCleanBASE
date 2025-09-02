const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyUYDikN_qure3KM-ZLMYsHQbHCMOgcDi7vIGd5Zq6gtpolY8xL0xkF9zAfYNXVbhU6/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast({
        title: "¡Solicitud enviada correctamente!",
        description: "Hemos recibido tu solicitud de presupuesto. Te contactaremos en las próximas 24 horas.",
      });
      form.reset();
    } else {
      throw new Error("Error en el envío");
    }
  } catch (error) {
    toast({
      title: "Error al enviar",
      description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      variant: "destructive",
    });
  }
};
