//nmbre, descripcion, imagen, 3 cosas que me gusta del programa, mail y github
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto py-3">
      <div>
        <h2>Ana Paola Castillo Garcia</h2>
        <div className="row">
          <br />
          <br />
          <div className="col">
            <p>
              Soy Paola Castillo y estoy estudiando en el bootcamp para
              potenciar mis conocimientos sobre programación . El convertirme en
              una profesional competente, el obtener una visión que buscan las
              empresas del mundo digital y crear soluciones efectivas a las
              necesidades del usuario son las razones que me motivan a
              esforzarme al máximo a lo largo de todo el bootcamp y dar lo mejor
              de mí.
            </p>
            <h4>3 cosas que me gustan del programa</h4>
            <ul>
              <li>
                Nos ayuda a conocer que tecnologías se usan hoy en día en un
                ambiente laboral.
              </li>
              <li>
                Conocemos que habilidades blandas debemos potenciar para poder
                ser contratados.
              </li>
              <li>
                Nos brinda las herramientas para poder conseguir un posible
                empleo fuera de nuestro país.
              </li>
            </ul>
            <p>
              <strong>Mail:</strong> &nbsp; castillogarcia.paola@gmail.com
            </p>
            <p>
              <strong>Github</strong> &nbsp; https://github.com/paocastg
            </p>
          </div>
          <div className="col-md-7">
            <img
              alt="paola"
              width={400}
              height={500}
              src={require("../IMG_4029.JPG")}
              class="img-responsive img-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
