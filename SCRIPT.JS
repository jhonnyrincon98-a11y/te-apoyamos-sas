// Contenido dinámico de cada pestaña
const pages = {
  inicio: `
    <section>
      <h2>Bienvenidos a Te Apoyamos S.A.S</h2>
      <p>Somos una firma de abogados conformada por un equipo de profesionales especializados en brindar asesoría legal y apoyo en la toma de decisiones en entornos profesionales donde el marco legal es esencial.</p>
    </section>

    <section>
      <h2>Sobre Nosotros</h2>
      <p>En <strong>Te Apoyamos S.A.S</strong> Ofrecemos apoyo jurídico en áreas corporativa, laboral, civil y administrativa. Facilitamos la comprensión y aplicación del marco jurídico para decisiones estratégicas.</p>
    </section>

    <section>
      <h2>Servicios</h2>
      <ul>
        <li>Asesoría corporativa: contratos, constitución societaria, cumplimiento normativo.</li>
        <li>Litigios y representación judicial y extrajudicial.</li>
        <li>Consultoría laboral: contratación, defensa, políticas internas</li>
        <li>Noticias legales y actualización normativa para clientes.</li>
      </ul>
    </section>

    <section>
      <h2>Trabaja con Nosotros</h2>
      <p>Si deseas unirte a nuestro equipo, envíanos tu información de contacto y experiencia previa. Creemos en el crecimiento conjunto y en brindar oportunidades de desarrollo profesional.</p>
    </section>
  `,

  requerimientos: `
    <section class="requerimientos-section">
      <h2>Requerimientos</h2>
      
      <h3>Análisis del problema</h3>
      <p>La firma de abogados 'Te Apoyamos SAS' requiere una solución web integral que cumpla tres objetivos principales: primero, un portal corporativo público que muestre de manera clara y profesional su trayectoria, servicios, equipo de abogados, noticias del ámbito legal y formas de contacto, reforzando su posicionamiento en el mercado; segundo, una plataforma segura para que abogados interesados en formar parte de la firma puedan registrar y enviar sus hojas de vida para su posterior evaluación y filtrado; y tercero, un sistema interno de gestión que permita a los profesionales de la firma administrar de manera organizada y confidencial la información de sus clientes, el tipo de procesos judiciales asignados y el registro detallado de los avances de cada caso, garantizando en todo momento la seguridad de los datos y la eficiencia operativa.</p>

      <h3>Requerimientos Funcionales</h3>
      <ul>
        <li><strong>Página pública:</strong> Secciones de inicio, servicios, noticias, equipo y contacto.</li>
        <li><strong>Formulario de hojas de vida:</strong> Sistema para recepción de CV y control de estado de postulaciones.</li>
        <li><strong>Registro de procesos:</strong> Gestión de casos por profesional asignado.</li>
        <li><strong>Listado de noticias:</strong> Publicación y actualización de contenido legal relevante.</li>
      </ul>

      <h3>Requerimientos No Funcionales</h3>
      <ul>
        <li><strong>Seguridad:</strong> Implementación de HTTPS, validación de archivos y control de acceso.</li>
        <li><strong>Respaldo:</strong> Copias periódicas de datos y formularios recibidos.</li>
        <li><strong>Usabilidad:</strong> Diseño responsive y accesible para todos los dispositivos.</li>
        <li><strong>Performance:</strong> Carga optimizada tanto en dispositivos móviles como en escritorio.</li>
      </ul>

      <h3>Actores</h3>
      <ul>
        <li><strong>Administrador:</strong> Encargado de gestionar contenidos, verificar postulaciones y generar reportes.</li>
        <li><strong>Clientes:</strong> Personas que consultan servicios y contactan para asesoría legal.</li>
        <li><strong>Abogados postulantes:</strong> Profesionales que envían sus hojas de vida para evaluación.</li>
        <li><strong>Personal jurídico:</strong> Abogados de la firma que gestionan casos y clientes.</li>
      </ul>
    </section>
  `,

  frameworks: `
    <section>
      <h2>Frameworks y herramientas recomendadas</h2>
      <ul>
        <li><strong>Bootstrap:</strong> Para el diseño responsivo y rápido desarrollo de interfaces.</li>
        <li><strong>Formspree o Google Forms:</strong> Para la gestión de formularios de contacto y cotización.</li>
        <li><strong>Firebase:</strong> Si se desea escalabilidad futura, permite autenticación, base de datos en tiempo real y hosting.</li>
        <li><strong>GitHub Pages:</strong> Para desplegar la página de manera gratuita.</li>
      </ul>
    </section>
  `,

  contacto: `
    <section>
      <h2>Contacto</h2>
      <p>Si tienes alguna duda, requerimiento o deseas una cotización personalizada, contáctanos:</p>
      <ul>
        <li>Email: contacto@teapoyamossas.com</li>
        <li>Teléfono: +57 300 123 4567</li>
        <li>Dirección: Calle 123 #45-67, Bogotá, Colombia</li>
      </ul>
      <p>También puedes enviarnos un mensaje a través de nuestro formulario de contacto.</p>
    </section>
  `
};

// Detectar página en URL
function loadPage() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || "inicio";
  document.getElementById("content").innerHTML = pages[page];
}

// Cargar al inicio
window.addEventListener("DOMContentLoaded", loadPage);