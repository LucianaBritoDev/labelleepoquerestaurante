function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({
    behavior: "smooth",
  });
}

function handleReservation(event) {
  event.preventDefault();
  alert(
    "¡Gracias por su reservación! Nos pondremos en contacto pronto para confirmar."
  );
}
