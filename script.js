"use strict";
document.write('<p>Estadisticas centro médico ñuñoa</p>');
const radiologiaPacientes = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  }
];

const traumatologiaPacientes = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const dentalPacientes = [
  {
    hora: "8:00",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];
JSON.stringify(radiologiaPacientes);

document.write(
  `${"<b>Radiología</b>"}
  Primera atención:
    ${radiologiaPacientes[0].paciente} - ${radiologiaPacientes[0].prevision} |
  Ultima Atención:
   ${radiologiaPacientes[radiologiaPacientes.length - 1].paciente} - ${
    radiologiaPacientes[radiologiaPacientes.length - 1].prevision
  }`
);
document.write("<br />");

document.write(
  `${"<b>Traumatología</b>"}
    Primera atención:
      ${traumatologiaPacientes[0].paciente} - ${
    traumatologiaPacientes[0].prevision
  } |
    Ultima Atención:
     ${traumatologiaPacientes[traumatologiaPacientes.length - 1].paciente} - ${
    traumatologiaPacientes[traumatologiaPacientes.length - 1].prevision
  }`
);
document.write("<br />");

document.write(
  `${"<b>Dental</b>"}
    Primera atención:
      ${dentalPacientes[0].paciente} - ${dentalPacientes[0].prevision} |
    Ultima Atención:
     ${dentalPacientes[dentalPacientes.length - 1].paciente} - ${
    dentalPacientes[dentalPacientes.length - 1].prevision
  }`
);
document.write("<br />");

let table = `
    <table>
        <thead>
            <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Especialista</th>
                <th>Previsión</th>
            </tr>
        </thead>
    `;
for (let i = 0; i < radiologiaPacientes.length; i++) {
  table += `
        <tbody>
            <tr>
                <td>${radiologiaPacientes[i].hora}</td>
                <td>${radiologiaPacientes[i].paciente}</td>
                <td>${radiologiaPacientes[i].rut}</td>
                <td>${radiologiaPacientes[i].especialista}</td>
                <td>${radiologiaPacientes[i].prevision}</td>
            </tr>
        </tbody>
        `;
}

table += `
        <thead>
            <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Especialista</th>
                <th>Previsión</th>
            </tr>
        </thead>
        `;
for (let i = 0; i < traumatologiaPacientes.length; i++) {
  table += `
        <tbody>
            <tr>
                <td>${traumatologiaPacientes[i].hora}</td>
                <td>${traumatologiaPacientes[i].paciente}</td>
                <td>${traumatologiaPacientes[i].rut}</td>
                <td>${traumatologiaPacientes[i].especialista}</td>
                <td>${traumatologiaPacientes[i].prevision}</td>
            </tr>
        </tbody>
        `;
}
table += `
        <thead>
            <tr>
                <th>Hora</th>
                <th>Paciente</th>
                <th>Rut</th>
                <th>Especialista</th>
                <th>Previsión</th>
            </tr>
        </thead>
        `;
for (let i = 0; i < dentalPacientes.length; i++) {
  table += `
            <tbody>
                <tr>
                    <td>${dentalPacientes[i].hora}</td>
                    <td>${dentalPacientes[i].paciente}</td>
                    <td>${dentalPacientes[i].rut}</td>
                    <td>${dentalPacientes[i].especialista}</td>
                    <td>${dentalPacientes[i].prevision}</td>
                </tr>
            </tbody>
            `;
}
document.getElementById("table").innerHTML = table;
