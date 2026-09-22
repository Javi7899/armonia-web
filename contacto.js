// El correo no está escrito en el HTML a propósito.
//
// Una página de soporte es pública por obligación: Apple exige una URL donde
// alguien pueda escribirte. Pero un `mailto:` en el código fuente lo recogen
// los robots que rastrean la web buscando direcciones, y a partir de ahí la
// dirección acaba en listas de spam. Escribirla aquí codificada no es
// seguridad —quien quiera leerla la lee— pero sí basta para que los rastreos
// automáticos, que no ejecutan JavaScript, pasen de largo.
document.addEventListener('DOMContentLoaded', function () {
  var correo = atob('YmVhdHNsZWVwZkBnbWFpbC5jb20=');
  document.querySelectorAll('[data-correo]').forEach(function (hueco) {
    var enlace = document.createElement('a');
    enlace.href = 'mailto:' + correo;
    enlace.textContent = correo;
    hueco.replaceChildren(enlace);
  });
});
